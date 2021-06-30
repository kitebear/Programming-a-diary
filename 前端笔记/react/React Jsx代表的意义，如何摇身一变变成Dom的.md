#### JSX定义

Jsx 是一种 javascript的扩展语法，它类似于模版语言，但是又具备了javascript的语法特点，用起来是非常的舒服



#### Jsx由来

Jsx语法通过Babel转义成Javascript所能理解的ReactElement

> Babel 是一个工具链，主要用于将 ECMAScript 2015+ 版本的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中。
> —— Babel 官网

ReactElement是通过React.CreateElement调用创建的

React.CreateElement 中做的事情就是返回一个ReactElement对象，中间做了很多数据组装的部分

```javascript
/**

 101. React的创建元素方法

 */

export function createElement(type, config, children) {

  // propName 变量用于储存后面需要用到的元素属性

  let propName; 

  // props 变量用于储存元素属性的键值对集合

  const props = {}; 

  // key、ref、self、source 均为 React 元素的属性，此处不必深究

  let key = null;

  let ref = null; 

  let self = null; 

  let source = null; 

  // config 对象中存储的是元素的属性

  if (config != null) { 

    // 进来之后做的第一件事，是依次对 ref、key、self 和 source 属性赋值

    if (hasValidRef(config)) {

      ref = config.ref;

    }

    // 此处将 key 值字符串化

    if (hasValidKey(config)) {

      key = '' + config.key; 

    }

    self = config.__self === undefined ? null : config.__self;

    source = config.__source === undefined ? null : config.__source;

    // 接着就是要把 config 里面的属性都一个一个挪到 props 这个之前声明好的对象里面

    for (propName in config) {

      if (

        // 筛选出可以提进 props 对象里的属性

        hasOwnProperty.call(config, propName) &&  /

        !RESERVED_PROPS.hasOwnProperty(propName) 

      ) {

        props[propName] = config[propName]; 

      }

    }

  }

  // childrenLength 指的是当前元素的子元素的个数，减去的 2 是 type 和 config 两个参数占用的长度

  const childrenLength = arguments.length - 2; 

  // 如果抛去type和config，就只剩下一个参数，一般意味着文本节点出现了

  if (childrenLength === 1) { 

    // 直接把这个参数的值赋给props.children

    props.children = children; 

    // 处理嵌套多个子元素的情况

  } else if (childrenLength > 1) { 

    // 声明一个子元素数组

    const childArray = Array(childrenLength); 

    // 把子元素推进数组里

    for (let i = 0; i < childrenLength; i++) { 

      childArray[i] = arguments[i + 2];

    }

    // 最后把这个数组赋值给props.children

    props.children = childArray; 

  } 

  // 处理 defaultProps

  if (type && type.defaultProps) {

    const defaultProps = type.defaultProps;

    for (propName in defaultProps) { 

      if (props[propName] === undefined) {

        props[propName] = defaultProps[propName];

      }

    }

  }

  // 最后返回一个调用ReactElement执行方法，并传入刚才处理过的参数

  return ReactElement(

    type,

    key,

    ref,

    self,

    source,

    ReactCurrentOwner.current,

    props,

  );

}

```

如上所见，最后返回的是一个ReactElement对象调用

而ReactElement就很简单，就是返回一个Object对象

```js
const ReactElement = function(type, key, ref, self, source, owner, props) {

  const element = {

    // REACT_ELEMENT_TYPE是一个常量，用来标识该对象是一个ReactElement

    $$typeof: REACT_ELEMENT_TYPE,

    // 内置属性赋值

    type: type,

    key: key,

    ref: ref,

    props: props,

    // 记录创造该元素的组件

    _owner: owner,

  };

  // 

  if (__DEV__) {

    // 这里是一些针对 __DEV__ 环境下的处理，对于大家理解主要逻辑意义不大，此处我直接省略掉，以免混淆视听

  }

  return element;

};

```

那么最后返回的ReactElement，就可以通过ReactDom.render(ReactElement, RealDom, [callback])，渲染在需要挂载的容器中

------

###### React学习笔记