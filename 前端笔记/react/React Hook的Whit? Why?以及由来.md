### What?  Why ?

React hook是`Facebook团队`编写的无状态组件的拓展，是一种对于函数组件的一种补偿，可以让开发者在函数体内维护自己的State，让你在不编写 class 的情况下使用 React 特性



React的**设计理念**

UI = Render(data)

UI = f(data)

相比于类组件，函数组件hooks的形式更加贴合React的设计思想，更加简单轻便，编码量小

适用场景：我只需要打死一只蚊子，而不是打掉一个重装战舰

类组件往往显的笨重，复杂的方式会带来高昂的理解成本

#### 类组件

类组件是非常正统的面向对象思想，但也会让复杂的组件变得难以理解

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



### 为什么要用React-Hooks？Why?

1、告别难以理解的Class，类组件还是有些重

2、解决业务逻辑难以拆分的问题，快艇一样的函数组件使开发组件的成本和效率得到极大地提升，就可以很方便的拆除组件，并且容易阅读理解

3、函数组件更符合React的设计理念



### React-Hooks 有什么潜在的问题？

1、Hooks暂时不能完全的为函数组件不全所有的生命周期，比如说ComponentDidUpdate、ComponentWillUnmount等，暂时没有

2、React-Hooks很好的呈现了“轻量”这个概念，这意味着它无法很好的处理“复杂”  【过于复杂或者过渡拆分】

3、Hooks在使用层面有着严格的规则和约束？？

