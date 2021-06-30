1. 首先用brew安装Go语言

2. 然后 go env 查看语言环境

3. vim ~/.bash_profile 设置GO语言环境变量,包括项目目录

   export GOROOT=/usr/local/opt/go/libexec

   export GOPATH=/Developer/go

   export PATH=$PATH:​GOROOT/bin

   export PATH=$PATH:​GOPATH/bin

4. 这时候就可以开始使用了，在$GOPATH目录下安装GO语言依赖包(package)，并且需要吧项目放在

   $GOPATH目录下的src目录下

##### 下载包报错可以用一下方式下载

```bash
git clone --depth 1 https://github.com/golang/tools.git golang.org/x/tools
```

需要下载 google.com 上的 package, 可能会很慢。如果安装并打开了 [shadowsocksNG-X](https://github.com/shadowsocks/ShadowsocksX-NG)，可以在 console 中设置 http proxy:

```bash
export http_proxy=http://127.0.0.1:1087;export https_proxy=http://127.0.0.1:1087;
```

GO 代理设置 https://www.jianshu.com/p/5f4cecaa08de