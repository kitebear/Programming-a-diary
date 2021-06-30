## 命令

开机启动redis命令
$ ln -sfv /usr/local/opt/redis/*.plist ~/Library/LaunchAgents

使用launchctl启动redis server
$ launchctl load ~/Library/LaunchAgents/homebrew.mxcl.redis.plist

使用配置文件启动redis server
$ redis-server /usr/local/etc/redis.conf

停止redis server的自启动
$ launchctl unload ~/Library/LaunchAgents/homebrew.mxcl.redis.plist

redis 配置文件的位置
/usr/local/etc/redis.conf

卸载redis和它的文件
brewuninstallredis rm ~/Library/LaunchAgents/homebrew.mxcl.redis.plist

测试redis server是否启动
$ redis-cli ping

