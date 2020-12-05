import React from 'react';
export default class PassProps extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
        }
    }

    // get input value and change state
    handleChange = (e)=>{
        this.setState({
            username: e.target.value
        })
    }
    // pass the input value to the parent
    handleClick = ()=>{
        this.props.handlerClick(this.state.username);
    }
    render(){
        return(
            <div>
                <input onChange={ this.handleChange.bind(this) } defaultValue = {this.state.username}/>
                <button onClick = { this.handleClick }>get input value and pass to the parent</button>
            </div>
        );
    }
}