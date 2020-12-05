import React from 'react';
let echarts = require('echarts/lib/echarts');
// 引入柱状图和折线图
require('echarts/lib/chart/line');
require('echarts/lib/chart/bar');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
export default class GrouoAlbum extends React.Component{
    // TODO: 添加功能：显示一团近三年销量，从两个维度（团体，年份）进行销量对比
    constructor(){
        super();
        this.state = {
            singleBTSData: [
                ['group','2018','2019','2020'],
                ['bts',150,260,460]
            ],
            groupSaleDate: [
                ['group','nct','bts','exo'],
                ['nct',100,120,200],
                ['bts',150,260,460],
                ['exo',120,100,90]
            ]
        }
    }
    componentDidMount(){
        this.initECharts();
    }

    initECharts = ()=>{
        let myCharts = echarts.init(document.getElementById('group-album'));
        let option = {
            title: {
              text: '销量'
            },
            tooltip: {},
            legend: {
                data: ['销量']
            },
            dataset: {
                source: this.state.singleBTSData,
            },
            xAxis: [
                {type: 'category', grisIndex: 0},
                {type: 'category', gridIndex: 1}
            ],
            yAxis: [
                {gridIndex: 0},
                {grisIndex: 1}
            ],
            series: [
                // only bts sales
                { type: 'line', seriesLayoutBy: 'row'}
                // list group sales by years
                // list group salse by group
            ]
        };
        myCharts.setOption(option);
    }
    render(){
        return (
            <div id = "group-album" style = {{ width :600 , height: 400 }}></div>
        );
    }
}