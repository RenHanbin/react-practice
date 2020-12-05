import React from 'react';
export default class SetStateDemo extends React.Component{
    constructor(){
        super();
        this.state = {
            count: 0,
        }
    }

    handlerClick = ()=>{
        this.setState({
            count: this.state.count+=1,
        });
        console.log(this.state.count);
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