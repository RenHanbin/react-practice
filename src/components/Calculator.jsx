/**
 * Calculator组件：父组件
 * 用于展示两个温度之间的转换效果，并判断水是否烧开
 * 父组件作用：记录子组件的共享数据，并向子组件进行数据分发
 */
import React from 'react';
import BoilingVerdict from './BoilingVerdict';
import Temperature from './TemperatureInput';
export default class Calculator extends React.Component{
    constructor(){
        super();
        this.state = {
            temperature: '',
            scale: 'c'
        }
    }
    // 温度转换函数
    toCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
      }  
    toFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
    }
    tryConvert(temperature, convert) {
        const input = parseFloat(temperature);
        if (Number.isNaN(input)) {
          return '';
        }
        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
    }

    handleCelsiusChange = (temperature)=>{
        this.setState({
            scale: 'c',
            temperature
        })
    }
    handleFahrenheitChange = (temperature)=>{
        this.setState({
            scale: 'f',
            temperature
        })
    }
    render(){
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = ( scale==='f'? this.tryConvert(temperature, this.toCelsius) : temperature );
        const fahre = ( scale==='c'? this.tryConvert(temperature, this.toFahrenheit) : temperature );
        return(
            <div>
                <Temperature scale='c' temperature={celsius} onTemperatureChange={this.handleCelsiusChange}/>
                <Temperature scale='f' temperature={fahre} onTemperatureChange={this.handleFahrenheitChange}/>
                <BoilingVerdict temp={parseFloat(celsius)}/>
            </div>
        );
    }
} 