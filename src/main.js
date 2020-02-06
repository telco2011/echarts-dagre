define(function(require) {
  // Default constants
  const ECHARTS_DAGRE_DEFAULT = {
    usingZoom: true,
    layout: {
      rankdir: "TB",
      edgesep: 100,
      ranksep: 300
    },
    aspect: {
      maxNodeSymbolSize: 80
    }
  };
  const DEFAULT_SCALE = 1;

  var dagre = require("dagre");

  window.echarts.registerLayout(function(ecModel, api) {
    ecModel.eachSeriesByType("graph", function(seriesModel) {
      var layout = seriesModel.get("layout");
      var echartsDagre = _.defaultsDeep(
        seriesModel.get("echartsDagre"),
        ECHARTS_DAGRE_DEFAULT
      );
      var graph = seriesModel.getGraph();
      // console.log("[echarts-dagre] - graph", graph);
      var dagreGraph = new dagre.graphlib.Graph();
      var coordSys = seriesModel.coordinateSystem;
      var viewRect = coordSys.getViewRect();
      if (!coordSys || coordSys.type !== "view") {
        throw new Error("Dagre layout not support coordinate system.");
      }

      // Set an object for the graph label
      dagreGraph.setGraph({});
      // // Default to assigning a new object as a label for each new edge.
      dagreGraph.setDefaultEdgeLabel(function() {
        return {};
      });
      if (layout === "dagre") {
        let topNodesCount = 0;
        let allNodesAreTopNodes = true;
        let nodeIndex = 0;
        graph.eachNode(function(node) {
          // Fill dagreGraph with echarts nodes
          dagreGraph.setNode(nodeIndex, {
            id: node.id
          });
          // Count how many top nodes are
          if (!isNaN(node.id)) {
            topNodesCount++;
          }
          // Flag: indicates if all nodes to show are top nodes
          if (allNodesAreTopNodes && isNaN(node.id)) {
            allNodesAreTopNodes = false;
          }
          nodeIndex++;
        });

        // Fill dagreGraph with the edges
        graph.eachEdge(function(edge) {
          dagreGraph.setEdge(edge.node1.dataIndex, edge.node2.dataIndex);
        });

        // dagreGraph layout options https://github.com/dagrejs/dagre/wiki
        dagreGraph.graph().rankdir = echartsDagre.layout.rankdir;
        dagreGraph.graph().edgesep = echartsDagre.layout.edgesep;
        dagreGraph.graph().ranksep = echartsDagre.layout.ranksep;
        if (allNodesAreTopNodes) {
          dagreGraph.graph().nodesep = viewRect.width / dagreGraph.nodeCount();
        }
        // Calculate all the coordinates
        dagre.layout(dagreGraph);

        // Start the logic to fill the coordinates in the echarts graph
        var xMin = Infinity;
        var yMin = Infinity;
        var xMax = -Infinity;
        var yMax = -Infinity;

        var nodeData = seriesModel.getData();
        var edgeData = seriesModel.getEdgeData();

        let nodeMaxX = 0;
        let nodeMinX = 0;

        const sortedCoordinates = {};
        const levels = {};

        // Sort coordinates after dagre calculation. This is needed because dagre code use an heuristic algorithim
        // and the coordinates are not in order
        dagreGraph.nodes().forEach(function(node, idx) {
          const dagreNode = dagreGraph.node(node);
          nodeMinX = Math.min(nodeMinX, dagreNode.x);
          nodeMaxX = Math.max(nodeMaxX, dagreNode.x);
          if (!sortedCoordinates[dagreNode.y]) {
            sortedCoordinates[dagreNode.y] = [dagreNode.x];
            levels[dagreNode.y] = 0;
          } else {
            sortedCoordinates[dagreNode.y].push(dagreNode.x);
            levels[dagreNode.y]++;
          }
        });
        Object.keys(sortedCoordinates).forEach(function(key) {
          sortedCoordinates[key].sort((a, b) => a - b);

          // TODO: Try to add more separation between nodes
          /* sortedCoordinates[key].forEach(function(coordinate, idx) {
            if (idx > 0) {
              sortedCoordinates[key][idx] = sortedCoordinates[key][idx - 1] + (echartsDagre.aspect.maxNodeSymbolSize);
            }
          }); */
        });

        // Get the dagreGraph information and set into the echarts nodeData
        const topNodeSep = (nodeMaxX - nodeMinX) / topNodesCount;
        let topNodeMargX = topNodeSep / 2;
        let symbolSize = echartsDagre.aspect.maxNodeSymbolSize;
        const copyOfLevels = _.cloneDeep(levels);
        dagreGraph.nodes().forEach(function(node, idx) {
          const dagreNode = dagreGraph.node(node);

          dagreNode.x =
            sortedCoordinates[dagreNode.y][
              levels[dagreNode.y] - copyOfLevels[dagreNode.y]
            ];
          copyOfLevels[dagreNode.y]--;

          if (!allNodesAreTopNodes && !isNaN(dagreNode.id)) {
            dagreNode.x = topNodeMargX;
            topNodeMargX += topNodeSep;
          }

          // TODO: Review this code to calculate the symbol size
          const calculateSymbolSize = function(nodesNumber) {
            const maxSize = echartsDagre.aspect.maxNodeSymbolSize;
            const separation = nodeMaxX / nodesNumber;
            if (separation / 2 > maxSize) {
              return maxSize;
            } else {
              return separation / 2;
            }
          };

          symbolSize = Math.min(
            symbolSize,
            calculateSymbolSize(sortedCoordinates[dagreNode.y].length)
          );
          nodeData.setItemLayout(idx, [dagreNode.x, dagreNode.y]);
          nodeData.setItemVisual(idx, "symbolSize", symbolSize);

          xMin = Math.min(xMin, dagreNode.x);
          yMin = Math.min(yMin, dagreNode.y);

          xMax = Math.max(xMax, dagreNode.x);
          yMax = Math.max(yMax, dagreNode.y);
        });

        dagreGraph.edges().forEach(function(edge, idx) {
          var n1 = dagreGraph.node(edge.v);
          var n2 = dagreGraph.node(edge.w);
          var edgeModel = edgeData.getItemModel(idx);
          var curveness = edgeModel.get("lineStyle.normal.curveness");
          var points = [
            [n1.x, n1.y],
            [n2.x, n2.y]
          ];
          if (curveness > 0) {
            var cx = ((n1.x + n2.x) / 2) * (1 - curveness);
            var cy = ((n1.y + n2.y) / 2) * (1 - curveness);
            if (
              layoutConfig.rankdir === "LR" ||
              layoutConfig.rankdir === "RL"
            ) {
              points.push([n1.x * curveness + cx, n2.y * curveness + cy]);
            } else {
              points.push([n2.x * curveness + cx, n1.y * curveness + cy]);
            }
          }
          edgeData.setItemLayout(idx, points);
        });

        // Keep aspect
        if (echartsDagre.usingZoom) {
          // Using zoom to center the nodes inside the canvas
          const newCenter = [xMax / 2, yMax / 2];
          coordSys.setCenter(newCenter);

          const dstWidth = viewRect.width - 10;
          const srcWidth = xMax + echartsDagre.aspect.maxNodeSymbolSize * 2;
          let scale = dstWidth / srcWidth;
          if (yMax * scale > viewRect.height) {
            scale = viewRect.height / yMax;
          }
          if (scale > DEFAULT_SCALE) {
            scale = DEFAULT_SCALE;
          }
          coordSys.setZoom(scale);
        } else {
          // Using coordSys to adapt all the graph size to the canvas without zoom
          var aspect = (xMax - xMin) / (yMax - yMin);
          var viewAspect = viewRect.width / viewRect.height;
          if (aspect > viewAspect) {
            var newHeight = viewRect.width / aspect;
            viewRect.y += (viewRect.height - newHeight) / 2;
            viewRect.height = newHeight;
          } else {
            var newWidth = viewRect.height * aspect;
            viewRect.x += (viewRect.width - newWidth) / 2;
            viewRect.width = newWidth;
          }
          // Reset bounding rect
          coordSys.setBoundingRect(xMin, yMin, xMax - xMin, yMax - yMin);
          coordSys.setViewRect(
            viewRect.x,
            viewRect.y,
            viewRect.width,
            viewRect.height
          );
        }
      }
    });
  });
});
