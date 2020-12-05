import React from 'react';
export default class StateCompoment extends React.Component{

    /**
     * 组件中的state状态：
     * 以前页面中元素的改变是通过修改DOM实现的，现在react采用state来实现页面元素的变化
     */

     constructor(props){
         super(props); // 继承父类的所有属性
         this.state = {
             count: 10, // 这个count就是StateComponent组件的状态,需要改变state状态的时候使用setState
             flag: false,
         }
     }

     // 增加count
     increaseCount = ()=>{
        // 在class组件当中，所有对state的更改都需要通过setState的方式实现
        this.setState({
            count: this.state.count+=1 // 注意，所有读count的时候都需要通过this.state.count的方式实现改变
        })
     }
     // 减少count
     decreateCount = ()=>{
        this.setState({
            count: this.state.count-=1
        })
     }
     // about this
     clickHandler = ()=>{
         console.log(this);
         // 箭头函数解决了this的指向问题，当前的this指向的是这个组件StateComponent
     }
     // change flag
     changeFlag = ()=>{
         this.setState({
             flag: ! this.state.flag,
         })
     }
    render(){
        // TODO:添加一个功能根据改变text的状态，并根据状态的不同输出不同文字
        let flagString = this.state.flag ? "flag为true" : "flag为false";
        return(
            <div>
                <h3>state component</h3>
                <p>{this.state.count}</p>
                <button onClick={this.increaseCount.bind(this.state)}>increase</button>
                <button onClick={this.decreateCount.bind(this.state)}>decrease</button>
                <button onClick={this.clickHandler}>关于this</button>
                <p>{flagString}</p>
                <button onClick={this.changeFlag}>change flag</button>
            </div>
        );
    }
}