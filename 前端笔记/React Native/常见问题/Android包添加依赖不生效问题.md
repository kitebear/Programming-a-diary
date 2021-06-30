# Android包添加依赖不生效问题

在添加完依赖以后发现编译不通过，并且按照官网做了`react-native link`操作

![](http://media.kitebear.cn/n/2021-01-06-025051.png)

这时候找到提示中的MainApplication.java文件，发现ImageResizerPackage引用是正常的

<img src="http://media.kitebear.cn/n/2021-01-06-030135.png" style="zoom:150%;" />

<img src="http://media.kitebear.cn/n/2021-01-06-030155.png" style="zoom:150%;" />

这时候需要去**android/app/build.gradle**文件中查一下依赖有没有被引入

发现果然没有引入image-resizer包，这时候在里面加一下

<img src="/Users/donghaoxie/Library/Application Support/typora-user-images/image-20210106110328456.png" alt="image-20210106110328456" style="zoom:150%;" />

重新Run一遍，就可以跑通了