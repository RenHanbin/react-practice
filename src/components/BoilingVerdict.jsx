/**
 * BoilingVerdict组件：
 * 拥有props为温度，并根据不同的温度判断是否会将水煮沸
 */
import React from 'react';
export default class BoilingVerdict extends React.Component{
    constructor(props){
        super(props);
        //this.waterTempRef = React.createRef();
    }
    render(){
        let ifWaterBoil = this.props.temp >= 100? <p>水已经煮沸</p> : <p>水不能煮沸</p>
        return(
            <div>
                {ifWaterBoil}
            </div>
        );
    }
}