## 核心算法的流程

#### 组件初始化

组件通过Render方法生成虚拟DOM，通过ReactDOM.render方法渲染真实的DOM

#### 组件更新

通过Render方法生成新的虚拟DOM，然后通过diff算法定位出两次虚拟DOM的差异，做出定向更新

