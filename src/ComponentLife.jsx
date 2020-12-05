import React from 'react';
export default class ComponentLife extends React.Component{
    // React生命周期函数
    constructor(props){
        super(props);
        this.state = {
            count: 10
        }
    }

    // 组件挂载(mount)：在render之后执行
    componentDidMount(){
        console.log("组件render完成，组件挂载");
    }
    // 
    componentDidUpdate(){
        console.log("componentDidUpdate_state改变之后重新render完成");
    }
    // 父组件change props
    UNSAFE_componentWillReceiveProps(){
        console.log("parent component change props");
    }
    
    // 组件卸载（unmount）:在正式卸载之前执行
    componentWillUnmount(){
        console.log("组件准备卸载");
    }

    handlerClick = ()=>{
        this.setState({
            count: this.state.count+=1,
        })
    }

    changeParentProps = ()=>{
        this.props.handlerClick("我的子组件传递给父组件的数据");
    }
    render(){
        // TODO:es6的解构赋值学习！！！
        const {count} = this.state.count;
        return(
            <div>
                <p>声明周期函数:{count}</p>
                <p>{this.props.title}</p>
                <button onClick ={this.handlerClick}>change state</button>
                <button onClick={this.changeParentProps}>change parent props through sun</button>
            </div>
        );
    }
} 