#### 我发现我们跳房子PC前端的webpack项目构建速度很有问题，很多优化的方式都没有用，项目启动的速度非常慢，我想要去优化一些这块

线上的打包速度也很慢`5~9`分钟

开发人员在生产环境启动环境的速度差不多在`1~3`分钟时间（根据电脑的性能变化）



https://zhuanlan.zhihu.com/p/139498741



[speed-measure-webpack-plugin](https://link.zhihu.com/?target=https%3A//github.com/stephencookdev/speed-measure-webpack-plugin) 分析速度

[terser-webpack-plugin](https://link.zhihu.com/?target=https%3A//github.com/webpack-contrib/terser-webpack-plugin) 提升js压缩速度

optimize-css-assets-webpack-plugin 压缩CSS

PurgeCSS 擦除无用的css

 [image-webpack-loader](https://link.zhihu.com/?target=https%3A//github.com/tcoopman/image-webpack-loader) 图片压缩

splitChunksPlugin 代码拆分 

tree-shaking 剔除无用的js代码



- `webpack.dev.js`：开发环境的配置文件
- `webpack.prod.js`：生产环境的配置文件
- `webpack.common.js`：公共配置文件



我们可以借助 `include` 和 `exclude` 这两个参数，规定 `loader` 只在那些模块应用和在哪些模块不应用。



### **`resolve.modules`**



### **`HappyPack`**  || [thread-loader](https://link.zhihu.com/?target=https%3A//github.com/webpack-contrib/thread-loader)



webpack.DllPlugin  DllReferencePlugin



缓存

### **`TerserPlugin`**   **`babel-loader`**

### **`HardSourceWebpackPlugin`**





![v2-49606ada8d0912b622fcf3c2238835e9_720w](https://pic2.zhimg.com/80/v2-49606ada8d0912b622fcf3c2238835e9_720w.jpg)

