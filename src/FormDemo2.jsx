import React from 'react';
export default class FormDemo2 extends React.Component{
    // TODO:编写一个非受控组件，使用ref
    constructor(){
        super();
        this.myRef = React.createRef();
        this.textInput = React.createRef();
    }
    
    componentDidMount(){
        console.log(this.myRef.current); // <div>hello</div>
        // 这个current指向的就是当前ref所在的DOM，对于 <div>hello</div> 的引用就是通过ref的current属性访问
    }
    focusTextInput = ()=>{
        this.textInput.current.focus();
    }
    render(){
        return (
            <div>
                ref and dom
                <div ref = {this.myRef}>hello</div> 
                <input type='text' ref={this.textInput}/>
                <input type='button' value='focus the text input' onClick={this.focusTextInput}/>
            </div>
        );
    }
}