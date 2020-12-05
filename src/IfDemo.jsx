import React from 'react';
export default class IfDemo extends React.Component{
    /**
     * 条件渲染的使用场景：
     * 1. 对视图条件进行切换
     * 2. 做缺省值
     */
    constructor(){
        super();
        this.state = {
            isLogin: false,
            showList: [],
        }
    }
    
    clickHandler = ()=>{
        this.setState({
            isLogin: true,
        })
    }
    render(){
        // 根据不同的登录状态返回不同的场景
        let showView = this.state.isLogin ? 
        <div>Sage</div> :
        <div>请登录</div>

        return(
            <div>
                条件渲染
                { showView }
                <button onClick = { this.clickHandler }>登录</button>
                {
                    this.state.showList.length ?
                    this.state.showList.map((element, index)=>{
                    return <p key={index}>{element}</p>
                    }):
                    <div>数据正在请求......</div>
                }
            </div>
           
        );
    }
} 