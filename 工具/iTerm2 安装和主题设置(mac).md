# iTerm2 + oh-my-zsh + agnoster

开发中终端命令会经常使用到，一个舒适的视觉效果会带来更好的开发体验。下面看一下我们将要修改的效果：

![](https://tva1.sinaimg.cn/large/006tNbRwly1ga42ywvlvsj31480tudtt.jpg)

##### 1.下载iTerm2

官网下载：[www.iterm2.com](https://www.iterm2.com/)

下载完成直接将`iTerm`拖入到应用程序，每次使用直接在应用中点击打开。

`Mac`系统默认`shell`类型为`bash`类型，而`iTerm2`则对应`zsh`类型。通过`cat`命令查看有哪些`shell`：

cat /etc/shells

切换`shell`：`chsh -s /bin/zsh`

##### 2、安装oh-my-zsh

curl安装：

`sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"`

`oh-my-zsh`带有各种主题，在`/.oh-my-zsh/themes`中：

![image-20191221095425926](https://tva1.sinaimg.cn/large/006tNbRwly1ga43xw2h7wj30yq0psav0.jpg)

##### 3、设置主题为agnoster

编辑zsh配置文件：

`vim ~/.zshrc`

修改`ZSH_THEME`字段：

`ZSH_THEME="agnoster"`

并在最后一行引入`bash`对应的配置文件，使得同时有效：

`source ~/.bash_profile`

##### 4、配置颜色

`cmd+点击`（偏好设置） -> Profiles -> Default -> Colors -> Colors Presets

![image-20191221100143650](https://tva1.sinaimg.cn/large/006tNbRwly1ga445g66wxj31020ns1en.jpg)

设置后效果如下：

![image-20191221100219125](https://tva1.sinaimg.cn/large/006tNbRwly1ga4464diamj31000ow7py.jpg)

此处有两个问题，一个是命令行前名称过长，占地太多，另一个是问号，字体原因导致。

![image-20191221101610427](https://tva1.sinaimg.cn/large/006tNbRwly1ga44kfmoosj31fo0qm4b9.jpg)

![image-20191221101530907](https://tva1.sinaimg.cn/large/006tNbRwly1ga44jqzjgzj31720nyn6k.jpg)

![img](https://upload-images.jianshu.io/upload_images/4677679-ff6cca41c8831f48.png)

##### 5、设置命令行前名称

编辑`agnoster.zsh-theme`主题文件

`vim ~/.oh-my-zsh/themes/agnoster.zsh-theme`

修改`prompt_context()`函数中的`black default`参数如下：

```shell
prompt_context() { 
	if [[ "$USER" != "$DEFAULT_USER" || -n "$SSH_CLIENT" ]]; then
	#prompt_segment black default "%(!.%{%F{yellow}%}.)%n@%m"
	prompt_segment black default "HB"
	fi
}
```

此处即是命令行前显示的名称，修改后执行`source ~/.zshrc`命令使配置生效。效果如下：

![image-20191221100724695](https://tva1.sinaimg.cn/large/006tNbRwly1ga44bcr16gj31060p60yc.jpg)

##### 6、安装字体，去除问号

直接下载字体：[github.com/powerline/f…](https://github.com/powerline/fonts)

下载至本地，执行脚本安装：

`./install.sh`

卸载：

`./uninstall.sh`

会加入到`/Users/donghaoxie/Library/Fonts`路径下，原有安装包删除即可。安装字体为`Meslo LG L DZ for Powerline`，`L M S`分别制定字体为`大 中 小`。

打开偏好设置设置字体：

![image-20191221101210138](https://tva1.sinaimg.cn/large/006tNbRwly1ga44g92ht1j31fo0qmk41.jpg)

重新打开终端即完成了设置：

![](https://tva1.sinaimg.cn/large/006tNbRwly1ga42ywvlvsj31480tudtt.jpg)

##### 7、安装命令提示插件

下载插件：[github.com/zsh-users/z…](https://github.com/zsh-users/zsh-autosuggestions)

将插件下载至`.oh-my-zsh/custom/plugins/`目录下

```
cd ~/.oh-my-zsh/custom/plugins/
git clone [https://github.com/zsh-users/zsh-autosuggestions.git](https://github.com/zsh-users/zsh-autosuggestions.git)
```

配置語法高亮效果：

使用Homebrew包管理工具安裝zsh-syntax-highlighting插件

```
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git
```

配置autojump跳转效果：

```
git clone https://github.com/wting/autojump.git
```

![img](https://yuweiguocn.github.io/assets/img/autojump/1.gif)

编辑配置文件：

```
vi ~/.zshrc
```

添加插件：

```
plugins=(
   git
   autojump
   zsh-syntax-highlighting
   zsh-autosuggestions
)
```

执行命令生效：

```
source ~/.zshrc
```

PS：當你重新打開終端時可能看不到變化，可能你的字體顏色太淡了，我們把其改亮一些:

```
cd ~/.oh-my-zsh/custom/plugins/zsh-autosuggestions
```

用 vim 編輯 `zsh-autosuggestions.zsh` 文件，修改`ZSH_AUTOSUGGEST_HIGHLIGHT_STYLE='fg=10'`

##### 8.扩展

1、iterm2 默認全局正確姿勢代理，不然下載速度讓人堪憂：在終端粘貼即可（前提是得掌握正確上網的方式，shadowsocks自行搜索

```
echo export all_proxy=socks5://127.0.0.1:1086 >> ~/.zshrc
```

測試是否成功：(能加載出html就是成功）

```
curl www.google.com
```

9.快捷键命令

![img](https://upload-images.jianshu.io/upload_images/4677679-11a35b66548d848c.png)