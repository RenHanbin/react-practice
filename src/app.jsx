import React from 'react';
// import MyNav from './myNav';
// import StateCompoment from './StateCompoment';
// import ComponentLife from './ComponentLife';
// import PassProps from './PassProps';
// import SetStateDemo from './SetStateDemo'
// import IfDemo from './IfDemo';
// import KeyDemo from './KeyDemo';
// import FormDemo2 from './FormDemo2';
import EChartsDemo from './EChartsDemo';
import BigDataPic from './BigDataPic';
// import GroupAlbum from './GroupAlubm';
// 先用class组件
class App extends React.Component{

    constructor(){
        super();
        this.state = {
            title: "文本1"
        }
    }

    // change props，这是直接在父组件中改变父组件的props
    // 也可以在子组件中通过调用父组件的handlerClick改变父组件的props
    handlerClick = (date)=>{
        this.setState({
            title: date
        })
    }
    render(){
        // 设置属性props，复用导航栏。对于导航栏Mynav1,Mynav2使用不同的数据
        /* const myNav1 = ["java", "pathon", "fix"];
        const myNav2 = ["js", "react", "vue"]; */
        return (
            <div>
                {/* <h1>hello react component</h1> */}
                {/* <StateCompoment/> */}
                {/* <ComponentLife title = {this.state.title} handlerClick = {this.handlerClick}/> */}
               {/*  <p>{this.state.title}</p>
                <PassProps handlerClick = {this.handlerClick}/>
                <SetStateDemo/> */}
                {/* <MyNav nav = {myNav1} title = "导航"/>
                <MyNav nav = {myNav2} title = "导航2"/> */}
                {/* <IfDemo/> */}
                {/* <KeyDemo/> */}
                {/* <FormDemo2/> */}
                <EChartsDemo/> 
                <BigDataPic/>
               {/* <GroupAlbum/> */}
            </div>  
        );
    }
}
export default App;