## 使用mobx做国际化

### **效果**

![image-20190130155918427](http://media.kitebear.cn/ct/2019-01-30-075918.png)

目前项目使用的是Taro做小程序开发框架，Taro可以集成mbox，当然一些正常的框架也可以集成mbox，只不过需要自己集成，或者用redux也可以用相同的思想实现。

### 思路

利用mbox action会重新render页面的能力来实现通过切换action来改变对应的语言，同样的国际化会写成一个字典数据结构的数据，通过设定统一的出口去统一读取字典中的值，并且可以实现参数代入。

核心代码

```jsx
import { observable } from 'mobx'
// Language是一个函数根据参数key来返回中英文
import Language from 'src/locales/index'

// 正则匹配有参数的形式
const RegEx = /#{(\w+)}/g

const counterStore = observable({
    // 当前使用的国际化map
    T: {},
    // 用来切换语言的函数
    setLocales(lang = 'zh') {
        this.T = Language(lang)
    },
    // 对外暴露get函数，通过对应的key来获取
    get(key, params) {
        let value = this.T[key]
        if (!value) {
            return ''
        }

        if (!params) {
            return value
        }
        
        value = value.replace(RegEx, (a, match) => {
            const v = params[match]
            if (v) {
                return v
            }

            return ''
        })
        return value
    }
})
export default counterStore
```

### 国际化初始化

根据当前手机系统设置的语言来设置当前使用的国际化文字language

```jsx
@inject((stores, props) => {
  return {
    localesStore: stores.localesStore || {}
  }
})
@observer
class App extends Component {

  config = {
    pages: [
      'pages/index'
    ],
    window: {
    }
  }

  componentWillMount() {
    try {
      const system = Taro.getSystemInfoSync()
      this.props.localesStore.setLocales(system.language)
    } catch (e) {
      console.log(e)
    }
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}
```

### 方法的使用

首先在对应的国际化文件中初始化想要设置的值

```js
export default {
    'login.phone': '手机号码',
    'login.phone.placeholder': '请输入手机号码',
    'login.code': '验证码',
    'login.code.sendmsg': '发送验证码',
    'login.btn': '登录',
    'login.msg': '今日购物#{discount}的折扣'
}
```

在对应想要国际化的文件引入localesStore

```jsx
@inject((stores, props) => {  
  return {
    T: stores.localesStore
  }
})
```

那么在使用的时候只需要T.get("输入想要的key","对应的params object")

```jsx
<AtButton type='primary' onClick={this.login}>{ T.get('login.btn') }</AtButton>
<View>{ T.get('login.msg', { discount: '7' }) }</View>
```

**看一下例子**

这时候我们希望在三秒以后吧国际化文字从中文变成英文，下面是对应的代码：

```jsx
componentWillMount() {
    try {
        const system = Taro.getSystemInfoSync()
        this.props.localesStore.setLocales(system.language)
        // 三秒以后从中文变成英文
        setTimeout(() => {
        	this.props.localesStore.setLocales('en')
    	}, 3000)
    } catch (e) {
    	console.log(e)
    }
}
```

在对应的国际化英文文件中加入

```js
export default {
    'login.phone': '手机号码en',
    'login.phone.placeholder': '请输入手机号码',
    'login.code': '验证码',
    'login.code.sendmsg': '发送验证码',
    'login.btn': 'login',
    'login.msg': "#{discount} off today's purchase discount"
}
```

如图，总共刷新了3次，每次3秒以后都会变成English

![](http://media.kitebear.cn/ct/2019-01-30-login1-30.gif)