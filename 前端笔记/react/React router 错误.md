1. this.props.history.push() 进行路由跳转时报错

   问题背景：配置按需加载后，首页可以正常跳转子页面，而在子页面中进行页面跳转时出现报错：`this.props.history.push中'push'is undefined` 。

   问题分析：项目中使用 `this.props.history.push()` 方法实现路由跳转，未进行文件拆分时可以正常使用，但是当进行文件拆分之后，子文件中无法获取 `this.props.history` 对象。

   解决方法：使用 `withRouter` 封装页面组件。示例代码如下：

   ```jsx
   import React from 'react';
   import { withRouter } from 'react-router-dom';
   
   class Card extends React.Component {
     constructor(props) {
         super(props);
   
       }
       render() {
         return (
           <div className="wrapper">
             <p>这是第二页：测试</p>
         </div>
         );
       }
   }
   export default withRouter(Card);
   ```

   这样封装之后，就无需一级级传递 `React Router` 的属性，子文件内也可以拿到需要的路由信息。

   