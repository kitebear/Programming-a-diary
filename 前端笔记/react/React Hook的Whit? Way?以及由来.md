### What?  Why ?

React hook是`Facebook团队`编写的无状态组件的拓展，是一种对于函数组件的一种补偿，可以让开发者在函数体内维护自己的State，这样就可以做很多东西



React的**设计理念**

UI = Render(data)

UI = f(data)

相比于类组件，函数组件hooks的形式更加贴合React的设计思想，更加简单轻便，编码量小

适用场景：我只需要打死一只蚊子，而不是打掉一个重装战舰

类组件往往显的笨重，复杂的方式会带来高昂的理解成本

#### 类组件

```jsx
Class App extends React.Component {
  componentDidMount () {
    
  }
  render () {
		return (
    	<div>Content...</div>
    )
  }
}
```



#### 函数组件

函数组件看起来很简单，只需要RenderUI

```jsx
function App () {
  return (
  	<div>Content...</div>
  )
}
```



#### 类组件和函数组件的不同点

类组件拥有this，刻意通过this做很多事情，函数组件不可以

类组件有自己丰富的生命周期函数，函数组件没有

类组件需要继承类，函数组件不需要

类组件刻意维护自己的state，函数组件不需要

*类组件会改变组件本身的状态（比如说在SetTimeout中三秒以后获取到一个错误的被修改过后的this.props），函数组件由于闭包的原因，**会存储Render内部的状态**，[用例](https://codesandbox.io/s/xenodochial-johnson-6ls1n?file=/src/App.js)



### React Hook的本质

React hooks是一套更强大、更灵活的“钩子”，hooks的出现丰富了函数组件的可使用范围，让开发者有对于组件的开发有更多的选择，如果说函数是一艘灵活的快艇，那么React-hooks是一个内容丰富的工具箱。