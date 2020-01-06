#### 在安装一个包 Arcanist 的时候 git报出以下错误

```
 ✘ HB  ~/ph  git clone https://github.com/phacility/arcanist.git
Cloning into 'arcanist'...
fatal: unable to access 'https://github.com/phacility/arcanist.git/': Failed to connect to 127.0.0.1 port 1086: Connection refused
```

经过搜索原因，是因为添加了代理的原因，通过下面的命令查询代理

首先使用尝试取消全局代理

```
$ git config --global --unset http.proxy
$ git config --global --unset https.proxy
```

发现代理依然存在

```ruby
env|grep -I proxy

http_proxy=127.0.0.1:58895
https_proxy=127.0.0.1:58895
```

然后通过下面命令成功取消全局代理

```ruby
unset http_proxy
```

```ruby
unset https_proxy
```

