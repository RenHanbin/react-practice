
import React from 'react';
let echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/bar');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');

export default class EChartsDemo extends React.Component{
    constructor(){
        super();
        this.state = {
            data: [
                ['product', '2015', '2016', '2017'],
                ['Matcha Latte',12.3,44.6,78.8],
                ['hello world',10.3,44.6,77.8],
            ],
            objArray: [
                { product: 'nct', '2017': 16, '2018':18,'2019':23},
                { product: 'bts', '2017': 7, '2018':7,'2019':7},
                { product: 'seventeen', '2017': 10, '2018':17,'2019':15},
            ],
        }
    }
    // 在render之后初始化ECharts
    componentDidMount(){
        this.initCharts();
    }

    // init ECharts
    initCharts = () =>{
        // TODO: 使用ref的方式去，而不是直接使用DOM节点去获取
        let myChart = echarts.init(this.refs.myChart);
        // 用option描述数据以及如何用数据形成大的ECharts
        // option是一个比较大的JavaScript对象
        let option = {
            legend: {}, // 就是上面那个提示的图例
            title: {
                text: "测试表格-react"
            },
            tooltip: {}, // 提示框，就是鼠标悬浮在图上面的时候的提示信息。
            dataset: {
                dimensions:  ['product', '2015', '2016', '2017'],
                source: this.state.objArray,
            },
            xAxis: { // x轴,category表示x轴是类目轴，类目轴会自动对应到dataset的第一列
                type: 'category'
            },
            yAxis: {}, //y轴，数值轴
            series: [ // 声明多个bar系列，默认每一个series会自动对应dataset的每一列
                {type: 'bar'},
                {type: 'bar'},
                {type: 'bar'},
            ]
        };
        myChart.setOption(option);
    }
    render(){
        return(
            <div ref="myChart" style={{width: 600 , height: 400}}>
            </div>
        );
    }

}