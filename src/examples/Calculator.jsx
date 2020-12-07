/**
 * Calculator组件：父组件
 * 状态提升之前
 */
import React from 'react';
import Temperature from './TemperatureInput';
export default class Calculator extends React.Component{
    constructor(){
        super();
        this.state ={
            scale: 'c'
        }
    }

    render(){
        return(
            <div>
                <Temperature scale='c' />
                <Temperature scale='f' />
            </div>
        );
    }
} 