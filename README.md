# ECharts graph layout extension integrated with dagre.js

## Install

```shell
npm install https://github.com/telco2011/echarts-dagre
```

```js
var echarts = require("echarts");
require("echarts-dagre");
```

## Usage

```js

...

chart.setOption({
    ...
    series: [{
        type: 'graph',
        // Change the layout to dagre, that's all you need to do.
        layout: 'dagre'
    }]
});
```

## Annex

- [Original echarts-dagre](https://github.com/ecomfe/echarts-dagre)
- [Dagre Wiki Documentation](https://github.com/dagrejs/dagre/wiki)
- [Graphlib API Reference](https://github.com/dagrejs/graphlib/wiki/API-Reference)
