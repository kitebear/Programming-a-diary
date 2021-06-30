#### React 有什么坑点？

1、Jsx做表达式判断的时候，需要强转为boolean类型，要不然会render出来0

2、componentWillReceiveProps 中尽量不要使用 this.setState 或者 call action 的操作， 有可能会发生一直重复渲染，导致页面崩溃

3、当给组件加ref时，不要用匿名函数

4、在遍历子节点的时候不要用index作为组件的key进行传入

5、在渲染子节点的时候，会把整个父节点全部渲染 ？？？ 

##### 

