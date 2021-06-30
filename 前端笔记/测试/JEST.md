JEST

快照测试

下次运行测试时，渲染的输出将与先前创建的快照进行比较。快照应该沿代码更改提交。当快照测试失败时，您需要检查是否是非预期的更改。如果是预期的更改，您可以使用npm test -- -u命令来覆盖现有的快照。

jest --coverage  测试使用率

jest --updateSnapshot  重新更新缓存文件

```js
{

  "presets": [

   "react-app","es2015", "es2016", "react", "stage-2"

  ]

}
```

babelrc

