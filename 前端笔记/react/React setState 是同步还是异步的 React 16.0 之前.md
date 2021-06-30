```jsx
import React from "react";

import "./styles.css";

export default class App extends React.Component{

  state = {

    count: 0

  }

  increment = () => {

    console.log('increment setState前的count', this.state.count)

    this.setState({

      count: this.state.count + 1

    });

    console.log('increment setState后的count', this.state.count)

  }

  triple = () => {

    console.log('triple setState前的count', this.state.count)

    this.setState({

      count: this.state.count + 1

    });

    this.setState({

      count: this.state.count + 1

    });

    this.setState({

      count: this.state.count + 1

    });

    console.log('triple setState后的count', this.state.count)

  }

  reduce = () => {

    setTimeout(() => {

      console.log('reduce setState前的count', this.state.count)

      this.setState({

        count: this.state.count - 1

      });

      console.log('reduce setState后的count', this.state.count)

    },0);

  }

  render(){

    return <div>

      <button onClick={this.increment}>点我增加</button>

      <button onClick={this.triple}>点我增加三倍</button>

      <button onClick={this.reduce}>点我减少</button>

    </div>

  }

}

```



以下输出代码

```
0
0 // React 异步操作
1
1 // React 事件合并
2
1 // setTimeout脱离了React异步的掌控
```

```js
// 对于React合成事件、React生命周期来说都会前后加锁
reduce = () => {
  	// 上锁
		// isBatchingUpdates = true
    setTimeout(() => {
			// 所以在加了注释以后的代码中
      // setTimeout中的callback是在isBatchingUpdates=false的时候执行的
      // 所以里面的执行内容是同步的
      console.log('reduce setState前的count', this.state.count)

      this.setState({
        count: this.state.count - 1
      });

      console.log('reduce setState后的count', this.state.count)

    },0);
	  // 放开锁
		// isBatchingUpdates = false
  }
```



