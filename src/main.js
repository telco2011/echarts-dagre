define(function(require) {
  var echarts = require("echarts");
  var dagre = require("dagre");

  window.echarts.registerLayout(function(ecModel, api) {
    ecModel.eachSeriesByType("graph", function(seriesModel) {
      var layout = seriesModel.get("layout");
      var graph = seriesModel.getGraph();
      console.log("[echarts-dagre] - graph", graph);
      var dagreGraph = new dagre.graphlib.Graph();
      var coordSys = seriesModel.coordinateSystem;
      var viewRect = coordSys.getViewRect();
      let topNodesCount = 0;
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
        let allNodesAreTopNodes = true;
        graph.eachNode(function(node) {
          var itemModel = node.getModel();
          // TODO Use getVisual
          var symbolSize = itemModel.get("symbolSize");
          if (!(symbolSize instanceof Array)) {
            symbolSize = [symbolSize, symbolSize];
          }
          dagreGraph.setNode(node.id, {
            id: node.id
          });
          if (!isNaN(node.id)) {
            topNodesCount++;
          }
          if (allNodesAreTopNodes && isNaN(node.id)) {
            allNodesAreTopNodes = false;
          }
        });

        console.log(
          "[echarts-dagre] - dagreGraph.nodeCount",
          dagreGraph.nodeCount()
        );

        graph.eachEdge(function(edge) {
          dagreGraph.setEdge(edge.node1.id, edge.node2.id);
        });

        dagreGraph.graph().rankdir = "TB";
        dagreGraph.graph().edgesep = 100;
        dagreGraph.graph().ranksep = 300;
        if (allNodesAreTopNodes) {
          dagreGraph.graph().nodesep = viewRect.width / dagreGraph.nodeCount();
          // dagreGraph.graph().marginx = dagreGraph.graph().nodesep / 2;
          // dagreGraph.graph().marginy = viewRect.height / 2;
        }
        dagre.layout(dagreGraph);

        console.log("[echarts-dagre] - dagreGraph", dagreGraph);

        var xMin = Infinity;
        var yMin = Infinity;
        var xMax = -Infinity;
        var yMax = -Infinity;

        var nodeData = seriesModel.getData();
        var edgeData = seriesModel.getEdgeData();

        let nodeMaxX = 0;
        let nodeMinX = 0;

        dagreGraph.nodes().forEach(function(node, idx) {
          node = dagreGraph.node(node);
          nodeMinX = Math.min(nodeMinX, node.x);
          nodeMaxX = Math.max(nodeMaxX, node.x);
        });

        console.log(
          "[echarts-dagre] - nodeMinX - nodeMaxX",
          nodeMinX,
          "-",
          nodeMaxX
        );

        const topNodeSep = (nodeMaxX - nodeMinX) / topNodesCount;
        let topNodeMarg = topNodeSep / 2;
        for (let index = 0; index < nodeData.count(); index++) {
          const echartsNode = nodeData.getRawDataItem(index);
          const dagreNode = dagreGraph.node(echartsNode.name);

          if (!allNodesAreTopNodes && !isNaN(dagreNode.id)) {
            dagreNode.x = topNodeMarg;
            topNodeMarg += topNodeSep;
          }

          nodeData.setItemLayout(index, [dagreNode.x, dagreNode.y]);

          xMin = Math.min(xMin, dagreNode.x);
          yMin = Math.min(yMin, dagreNode.y);

          xMax = Math.max(xMax, dagreNode.x);
          yMax = Math.max(yMax, dagreNode.y);
        }

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

        console.log(
          "[echarts-dagre] - coordSys.getCenter, coordSys.getZoom",
          coordSys.getCenter(),
          coordSys.getZoom()
        );
        console.log(
          "[echarts-dagre] - coordSys.getRoamTransform",
          coordSys.getRoamTransform()
        );

        const newCenter = [xMax / 2, yMax / 2];
        console.log("[echarts-dagre] - newCenter", newCenter);
        coordSys.setCenter(newCenter);

        console.log(
          "[echarts-dagre] - viewRect",
          viewRect.width,
          viewRect.height,
          viewRect
        );

        const dstWidth = viewRect.width;
        const srcWidth = xMax;
        let scale = dstWidth / srcWidth;
        if (yMax * scale > viewRect.height) {
          scale = viewRect.height / yMax;
        }
        if (scale > 1) {
          scale = 1;
        } else {
          scale -= 0.008;
        }
        console.log("[echarts-dagre] - scale", scale);

        const graphArea = xMax * yMax;
        const viewArea = viewRect.width * viewRect.height;
        const areaFactor = viewArea / graphArea > 1 ? 1 : 0.42;
        console.log(
          "[echarts-dagre] - graphArea, viewArea, areaFactor",
          graphArea,
          viewArea,
          areaFactor
        );
        coordSys.setZoom(scale);
        // Keep aspect
        /*var aspect = (xMax - xMin) / (yMax - yMin);
        var viewAspect = viewRect.width / viewRect.height;
        if (aspect > viewAspect) {
          var newHeight = viewRect.width / aspect;
          viewRect.y += (viewRect.height - newHeight) / 2;
          viewRect.height = newHeight;
        } else {
          var newWidth = viewRect.height * aspect;
          viewRect.x += (viewRect.width - newWidth) / 2;
          viewRect.width = newWidth;
        }*/
        // Reset bounding rect
        // coordSys.setBoundingRect(xMin, yMin, xMax - xMin, yMax - yMin);
        /*coordSys.setViewRect(
          viewRect.x,
          viewRect.y,
          viewRect.width,
          viewRect.height
        );*/
      }
    });
  });
});
