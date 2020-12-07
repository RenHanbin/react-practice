import React from 'react';
export default class SetStateDemo extends React.Component{
    constructor(){
        super();
        this.state = {
            count: 0,
            age: 23,
        }
    }

    componentDidMount(){
        this.setState({
            count: this.state+1,
            ...this.state  // 把其他的属性（未改变的）重新赋值到state当中。
        });
        console.log('componentDidMount'+this.state.count);
    }
    handlerClick = ()=>{
        this.setState({
            count: this.state.count+=1,
        });
        console.log(this.state.count+'');
    }
    render(){
        return(
            <div>
                <p>关于setstate是同步还是异步的问题</p>
                <p>{this.state.count}</p>
                <button onClick={this.handlerClick}>increase count</button>
            </div>
        );
    }
}