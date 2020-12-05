import React from 'react';
export default class FormDemo extends React.Component{
    // TODO:编写一个受控组件，然后通过点击按钮获得输入的input值
    constructor(){
        super();
        this.state = {
            username: "",
        }
    }
    submitHandler = (e)=>{
        e.preventDefault();
        console.log(this.state.username);
    }
    changeHandler = (e)=>{
        this.setState({
            username: e.target.value,
        })
    }
    render(){
        return (
            <div>
                <form onSubmit = {this.submitHandler}>
                    <input value={this.state.username} onChange = {this.changeHandler}/>
                    <input type = "submit" value="提交"/>
                </form> 
            </div>
        );
    }
}