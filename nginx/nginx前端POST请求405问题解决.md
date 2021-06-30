打开调试面板检查错误

<img src="http://media.kitebear.cn/n/2021-01-13-WeChatb5202fba7059a7193fbc545bac134e33-1.png" alt="405"  />

会发现所有接口请求都变成 405

这种方式是因为服务器不允许，静态文件响应POST请求，否则就会返回**405 Not Allowed**

这时候就需要改一下nginx配置文件了

在server中加一行,将405跳转到

```nginx
server {
  #...
  error_page  405     =200 $uri;
  #...
}
```

