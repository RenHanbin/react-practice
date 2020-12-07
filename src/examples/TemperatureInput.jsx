/**
 * TemperatureInput组件
 * 再次抽离温度输入input组件，要求温度输入可以是华氏度也可以是摄氏度
 */
import React from 'react';
const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
  };// adjust temp type
export default class TemperatureInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            temperature: '',
        }
    }
    handleChange = (event)=>{
        this.setState({temperature: event.target.value,});
    }
    render(){
        return(
            <div>
                <p>输入的温度是{scaleNames[this.props.scale]}</p>
                <input type="text" value={this.state.temperature} onChange={this.handleChange}/>
            </div>
        );
    }
}