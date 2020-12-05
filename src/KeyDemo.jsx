import React, { Children } from 'react';
export default class KeyDemo extends React.Component{
    constructor(){
        super();
        this.state = {
            userInfo: [
                {
                    username: 'Sage',
                    age: 20,
                    jobs: ['学生','老师']
                },
                {
                    username: 'kdy',
                    age: 21,
                    jobs: ['学生','老师']
                },
                {
                    username: 'Lucas',
                    age: 22,
                    jobs: ['学生','idol']
                }
            ]
        }
    }
    clickHandler = ()=>{
        this.setState({
            userInfo: this.state.userInfo.concat({
                    username: 'Kun',
                    age: 25,
                    jobs: ['学生','老师']
            })
        });
    }
    render(){
        return (
            <div>
                关于列表渲染
                {
                    this.state.userInfo.map((element, index)=>{
                        return (
                            <li key={index}>
                                <span>{element.username}</span><br/>
                                <span>{element.age}</span>
                                <div>
                                    {
                                        element.jobs.map((childrenElement, childrenIndex)=>{
                                        return <span key={ childrenIndex }>{ childrenElement }</span>
                                        })
                                    }
                                </div>
                            </li>
                        )
                    })
                }
                <button onClick = {this.clickHandler}>追加数组</button>
            </div>
        );
    };
}