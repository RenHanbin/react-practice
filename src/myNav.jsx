import React from 'react';

export default class MyNav extends React.Component{
    render(){
        // 因为在app.jsx中传入的key就是nav，所以这里用nav来调用传入的数组
        console.log(this.props.nav);
        return(
            <div>
                <h3>{this.props.title}</h3>
                <ul>
                    {
                        this.props.nav.map((element, index )=> {
                        return <li key = {index} >{ element }</li>
                        })
                    }
                </ul>
            </div>
        );
    }
}