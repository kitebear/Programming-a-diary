## 项目使用[Taro](https://taro.aotu.io/)开发 

类似于React写法

```shell
# npm script

$ npm run dev:weapp

$ npm run build:weapp
```

### React Native

Note：如果要支持 React Native 端，必须采用 Flex 布局，并且样式选择器仅支持类选择器，且不支持 组合器 Combinators and groups of selectors。

以下选择器的写法都是不支持的，在样式转换时会自动忽略。

```scss
.button.button_theme_islands{

  font-style: bold;

}

img + p {

  font-style: bold;

}

p ~ span {

  color: red;

}

div > span {

  background-color: DodgerBlue;

}

div span { background-color: DodgerBlue; }
```

### 是否支持全局样式？

入口文件 app.js 里面引入的样式就是全局样式，本地样式会覆盖全局样式。

### 文件命名

Taro 中普通 JS/TS 文件以小写字母命名，多个单词以下划线连接，例如 `util.js`、`util_helper.js`

Taro 组件文件命名遵循 Pascal 命名法，例如 `ReservationCard.jsx`

### 项目目录结构

├── dist                   编译结果目录
├── config                 配置目录
|   ├── dev.js             开发时配置
|   ├── index.js           默认配置
|   └── prod.js            打包时配置
├── src                    源码目录
|   ├── pages              页面文件目录
|   |   ├── index          index 页面目录
|   |   |   ├── index.js   index 页面逻辑
|   |   |   └── index.css  index 页面样式
|   ├── app.css            项目总通用样式
|   └── app.js             项目入口文件
└── package.json

app.js 文件下有config，可以设置微信小程序配置

Taro 多出来一个 componentDidShow 和 componentDidHide  分别对应 小程序中onShow 和 onHide

### 路由说明

```js
// 跳转到目的页面，打开新页面
Taro.navigateTo({
  url: '/pages/page/path/name'
})

// 跳转到目的页面，在当前页面打开
Taro.redirectTo({
  url: '/pages/page/path/name'
})
```

### 路由传参

```js
// 传入参数 id=2&type=test
Taro.navigateTo({
  url: '/pages/page/path/name?id=2&type=test'
})
```

这样的话，在跳转成功的目标页的**生命周期**方法里就能通过 `this.$router.params` 获取到传入的参数，例如上述跳转，在目标页的 `componentWillMount` 生命周期里获取入参

```js
class C extends Taro.Component {
  componentWillMount () {
    console.log(this.$router.params) // 输出 { id: 2, type: 'test' }
  }
}
```

### 设计稿及尺寸单位

在 Taro 中尺寸单位建议使用 `px`、 `百分比 %`，Taro 默认会对所有单位进行转换。在 Taro 中书写尺寸按照 1:1 的关系来进行书写，即从设计稿上量的长度 `100px`，那么尺寸书写就是 `100px`，当转成微信小程序的时候，尺寸将默认转换为 `100rpx`，当转成 H5 时将默认转换为以 `rem` 为单位的值。

如果你希望部分 `px` 单位不被转换成 `rpx` 或者 `rem` ，最简单的做法就是在 px 单位中增加一个大写字母，例如 `Px` 或者 `PX` 这样，则会被转换插件忽略。

结合过往的开发经验，Taro 默认以 `750px` 作为换算尺寸标准，如果设计稿不是以 `750px` 为标准，则需要在项目配置 `config/index.js` 中进行设置，例如设计稿尺寸是 `640px`，则需要修改项目配置 `config/index.js` 中的 `designWidth`配置为 `640`：[LINK](https://nervjs.github.io/taro/docs/size.html)

### 静态资源引用

可以直接通过 ES6 的 `import` 语法来引用样式文件，跟之前的用法一样

### 组件命名

在 Taro 中，所有组件都应当首字母大写并且使用大驼峰式命名法（Camel-Case）类似<HomePage/>

### 环境判断以及Refs

process.env.TARO_ENV

用于判断当前编译类型，目前有 `weapp` / `swan` / `alipay` / `h5` / `rn` / `tt` 六个取值，可以通过这个变量来书写对应一些不同环境下的代码，在编译时会将不属于当前编译类型的代码去掉，只保留当前编译类型下的代码，例如想在微信小程序和 H5 端分别引用不同资源

```jsx
class MyComponent extends Component {

  componentDidMount () {
    // 如果 ref 的是小程序原生组件，那只有在 didMount 生命周期之后才能通过
    // this.refs.input 访问到小程序原生组件
    if (process.env.TARO_ENV === 'weapp') {
      // 这里 this.refs.input 访问的时候通过 `wx.createSeletorQuery` 取到的小程序原生组件
    } else if (process.env.TARO_ENV === 'h5') {
      // 这里 this.refs.input 访问到的是 `@tarojs/components` 的 `Input` 组件实例
    }
  }

  render () {
    return <Input ref='input' />
  }
}
```

### 全局样式类

使用外部样式类可以让组件使用指定的组件外样式类，如果希望组件外样式类能够完全影响组件内部，可以将组件构造器中的 `options.addGlobalClass` 字段置为 `true`。

```jsx
/* CustomComp.js */
export default CustomComp extends Component {
  static options = {
    addGlobalClass: true
  }

  render () {
    return <View className="red-text">这段文本的颜色由组件外的 class 决定</View>
  }
}
```

```scss
/* 组件外的样式定义 */
.red-text {
  color: red;
}
```

### 最佳实践

1. 如果你需要在编译时禁用掉 ESLint 检查，可以在命令前加入 `ESLINT=false` 参数

```shell
$ ESLINT=false taro build --type weapp --watch
```

1. 在 Taro 中，父组件要往子组件传递函数，属性名必须以 `on` 开头

```jsx
// 调用 Custom 组件，传入 handleEvent 函数，属性名为 `onTrigger`
class Parent extends Component {

  handleEvent () {

  }

  render () {
    return (
      <Custom onTrigger={this.handleEvent}></Custom>
    )
  }
}
```

1. 不要在 `state` 与 `props` 上用同名的字段，因为这些被字段在微信小程序中都会挂在 `data` 上。

1. 不要以 `id`、`class`、`style` 作为自定义组件的属性与内部 state 的名称，因为这些属性名在微信小程序小程序中会丢失。
2. 在 Taro 中，JS 代码里必须书写单引号，特别是 JSX 中，如果出现双引号，可能会导致编译错误。
3. 在 Taro 编译到小程序端后，组件的 `constructor` 与 `render` 默认会多调用一次
4. `this.$componentType` 可能取值分别为 `PAGE` 和 `COMPONENT`，开发者可以根据此变量的取值分别采取不同逻辑。

### 在小程序中，可以使用 this.$preload 函数进行页面跳转传参

```jsx
// 传入单个参数

// A 页面
// 调用跳转方法前使用 this.$preload
this.$preload('key', 'val')
Taro.navigateTo({ url: '/pages/B/B' })

// B 页面
// 可以于 this.$router.preload 中访问到 this.$preload 传入的参数
componentWillMount () {
  console.log('preload: ', this.$router.preload.key)
}
```

```jsx
// 传入多个参数

// A 页面
this.$preload({
  x: 1,
  y: 2
})
Taro.navigateTo({ url: '/pages/B/B' })

// B 页面
componentWillMount () {
  console.log('preload: ', this.$router.preload)
}
```

### 全局变量

在 Taro 中推荐使用 `Redux` 来进行全局变量的管理，但是对于一些小型的应用， `Redux` 就可能显得比较重了，这时候如果想使用全局变量，推荐如下使用。

新增一个自行命名的 `JS` 文件，例如 `global_data.js`，示例代码如下

```js
const globalData = {}

export function set (key, val) {
  globalData[key] = val
}

export function get (key) {
  return globalData[key]
}
```

随后就可以在任意位置进行使用啦

```jsx
import { set as setGlobalData, get as getGlobalData } from './path/name/global_data'

setGlobalData('test', 1)

getGlobalData('test')
```

### 编译配置

可以从以下链接查看Taro的编译配置 https://nervjs.github.io/taro/docs/config.html  [详细说明](https://nervjs.github.io/taro/docs/config-detail.html)

### 使用微信小程序第三方组件和插件

[引入第三方组件](https://nervjs.github.io/taro/docs/wx-third-party.html)

### 案例和文章

- Taro 组件库示例 [taro-components-sample](https://github.com/NervJS/taro-components-sample)，以及组件库[文档](https://nervjs.github.io/taro/docs/components-desc.html)

- [使用Taro框架开发小程序](https://juejin.im/post/5ba0a53af265da0ab5037234)

- [Taro UI](