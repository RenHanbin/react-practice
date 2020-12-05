import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

// 使用计时器，更新渲染
// const element =() 加圆括号是因为当标签有多行的时候需要用圆括号包裹起来
// 注意JS语法要用{}包裹起来，比如获取当前时间{ new Date().toLocalTimeString() }
/* function tick(){
  const element = (
    <div>
      <h1>hello world</h1>
      <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}
// setInterval() 回调函数，每隔1000调用tick
setInterval(tick,1000);
 */

ReactDOM.render(<App/>, document.getElementById('root'));
