import React from 'react';
/**
 * 非受控组件练习：点击提交按钮。控制台获取输入框的值
 */
export default class FormDemo3 extends React.Component{
    constructor(){
        super();
        this.fileInputRef = React.createRef();
    }
    handleSubmit = (event)=>{
        event.preventDefault();
        console.log(this.fileInputRef.current.files[0].name);
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="file" ref={this.fileInputRef}/>
                    <input type="submit" value="submit file"/>
                </form>
            </div>
        );
    }
}