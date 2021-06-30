# 解决realm卡的问题

### 原因

公司网络不好会导致realm包下载不出来，编译一直卡在这个位置，事实上这个包就算压缩以后也有191.1MB，下个鬼…..而且还要翻墙才能下出来

![](http://media.kitebear.cn/n/2020-12-09-regust%20co.%20MttesIstatiC.reala.1o%206oomloads%20syncrealarsyac--ecoa-d.e.2.tar.gz%201ofled.%20reaseni%20raae.png)

### 实际有用的办法

用翻墙工具下载出`realm-sync-cocoa-4.4.2.tar.gz`包，利用http-server起一个本地服务

在react-native项目中找到node_modules/realm目录，有一个文件download-realm.js

```js
...
function download(serverFolder, archive, destination) {
 //本地开启的服务地址
    const url = `http://172.16.47.122:8086/realm-sync-cocoa-4.4.2.tar.gz`;
    console.log(`Download url: ${url}`);
    const proxyUrl = process.env.HTTP_PROXY || process.env.http_proxy || process.env.HTTPS_PROXY || process.env.https_proxy;
    let agent;
    if (proxyUrl) {
        const agentOpts = require('url').parse(proxyUrl);
        agent = new HttpsProxyAgent(agentOpts);
   }
    return fetch(url, { agent }).then(response => {
        if (response.status !== 200) {
            throw new Error(`Error downloading ${url} - received status ${response.status} ${response.statusText}`);
       }
 
        const lastModified = new Date(response.headers.get('Last-Modified'));
        const contentLength = parseInt(response.headers.get('Content-Length'), 10);
        return fs.stat(destination).then(stat => {
            if (stat.mtime.getTime() <= lastModified.getTime() || stat.size !== contentLength) {
                return saveFile(response);
           }
       }).catch(() => saveFile(response));
   });
 
    function saveFile(response) {
        if (process.stdout.isTTY) {
            printProgress(response.body, parseInt(response.headers.get('Content-Length')), archive);
       } else {
            console.log(`Downloading ${archive}`);
       }
        return new Promise((resolve) => {
            const file = fs.createWriteStream(destination);
            response.body.pipe(file).once('finish', () => file.close(resolve));
       });
   }
}
...
```

以前卡在这个地方起码要10分钟，就算能下载也需要3分钟左右，现在秒开

利用启动好的服务链接替换这个url地址就可以了,**而且本地下载贼快** =) 事后关掉单独开启的服务

code中可以看到有一个url的变量，这就是下载需要的url

### 不用本地启用服务的办法

将库放在gitlab中，并且修改源码，上传到一个第三方服务器，一劳永逸

<img src="http://media.kitebear.cn/n/2021-01-06-030732.png" style="zoom:150%;" />

### 解决成果

以前卡在这个地方起码要10分钟，就算能下载也需要3分钟左右，现在秒开