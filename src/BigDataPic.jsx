import React from 'react';
const echarts = require('echarts');
export default class Barchart extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            dataCount: 5e5,
        }
    }
    componentDidMount(){
        this.initCharts();
    }
    initCharts = ()=>{
        let barChart = echarts.init(this.refs.barChart);
        let data = this.generateData(this.state.dataCount);
        let option = {
            title: {
                text: echarts.format.addCommas(this.state.dataCount) + ' Data',
                left: 10
            },
            toolbox: {
                feature: {
                    dataZoom: {
                        yAxisIndex: false
                    },
                    saveAsImage: {
                        pixelRatio: 2
                    }
                }
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            grid: {
                bottom: 90
            },
            dataZoom: [{
                type: 'inside'
            }, {
                type: 'slider'
            }],
            xAxis: {
                data: data.categoryData,
                silent: false,
                splitLine: {
                    show: false
                },
                splitArea: {
                    show: false
                }
            },
            yAxis: {
                splitArea: {
                    show: false
                }
            },
            series: [{
                type: 'bar',
                data: data.valueData,
                // Set `large` for large data amount
                large: true
            }]
        };
        barChart.setOption(option);
    }
    generateData(count){
        let baseValue = Math.random() * 1000;
        let time = +new Date(2011, 0, 1);
        let smallBaseValue;
        function next(idx) {
            smallBaseValue = idx % 30 === 0
                ? Math.random() * 700
                : (smallBaseValue + Math.random() * 500 - 250);
            baseValue += Math.random() * 20 - 10;
            return Math.max(
                0,
                Math.round(baseValue + smallBaseValue) + 3000
            );
        }

        let categoryData = [];
        let valueData = [];

        for (var i = 0; i < count; i++) {
            categoryData.push(echarts.format.formatTime('yyyy-MM-dd\nhh:mm:ss', time));
            valueData.push(next(i).toFixed(2));
            time += 1000;
        }

        return {
            categoryData: categoryData,
            valueData: valueData
        };
    }
    render(){
        return(
            <div ref = 'barChart' style = {{width: 600, height:400 }}></div>
        );
    }
}
// export default () => <>大数据量柱图</>;

