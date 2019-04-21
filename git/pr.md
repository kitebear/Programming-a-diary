## [基于Github的pull request流程做开源贡献](http://blog.xiayf.cn/2016/01/18/github-fork-pull-request/)

最近给 [beego](https://github.com/astaxie/beego) 提了几个 pull request （简称PR），都已被接受。在使用pull request的过程中，遇到了一点小问题，才知以前并非真的理解这个流程，故在此做点记录整理。

我以 [beego](https://github.com/astaxie/beego) 为例，将pull request的整体使用流程绘图如下：

![fork-pull-request](https://raw.githubusercontent.com/youngsterxyf/youngsterxyf.github.com/master/assets/uploads/pics/fork-pull-request.jpeg)

beego代码库有两个长期分支 `master` 和 `develop`，`master`为稳定分支，`develop`为开发分支，所有PR都要求提交到 `develop` 分支。

1. 先将 [astaxie/beego](https://github.com/astaxie/beego) 代码库 fork 一份到自己的名下（如我的 [youngsterxyf/beego](https://github.com/youngsterxyf/beego)）。

2. 把 [youngsterxyf/beego](https://github.com/youngsterxyf/beego) clone 到本地机器上做开发。因为PR要提到 [astaxie/beego](https://github.com/astaxie/beego) 的 develop 分支，所以最好对应地在你fork的代码库的 develop 分支做开发。在本地开发测试完成后，将commit push到 [youngsterxyf/beego](https://github.com/youngsterxyf/beego) 。

3. 在 [youngsterxyf/beego](https://github.com/youngsterxyf/beego) 页面点击 “New pull request”，会跳转到 [astaxie/beego](https://github.com/astaxie/beego) 创建一个新的PR，在页面中需要选择`base fork`的目标分支（这里为 [astaxie/beego](https://github.com/astaxie/beego) 的 develop 分支）和`head fork`的目标分支（这里为 [youngsterxyf/beego](https://github.com/youngsterxyf/beego) 的 develop 分支）。PR提交后，等待 [astaxie/beego](https://github.com/astaxie/beego) 代码库的协作者来review我的PR。

4. 如果其他人也给

    

   astaxie/beego

    

   提了PR（或者直接在 develop 上做了变更），我会把

    

   youngsterxyf/beego

    

   的 develop 分支同步到最新状态，便于我进行新的开发，同步的流程为：

   1. 在本地代码库添加一个新的remote，名为 `beego` ： `git remote add beego https://github.com/astaxie/beego.git`
   2. 在 `develop` 分支上执行 `git pull beego develop`，这会获取 [astaxie/beego](https://github.com/astaxie/beego) develop 分支最新的状态，并 merge 到本地代码库的 develop 分支
   3. 将本地代码库的 develop 分支 push 到 [youngsterxyf/beego](https://github.com/youngsterxyf/beego) ：`git push origin develop`

5. 在发布新的版本时, [astaxie/beego](https://github.com/astaxie/beego) 的 `develop` 分支会先 merge 到其 master 分支，然后打上新的 tag 。这时我也会把 [youngsterxyf/beego](https://github.com/youngsterxyf/beego) 的 master 分支同步到最新状态，流程与 develop 分支相同。

------

在第3步中，如果发现`base fork`的目标分支和`head fork`的目标分支之间有代码冲突，则需要先在本地代码库对应的分支上解决这个冲突，然后 push 到 [youngsterxyf/beego](https://github.com/youngsterxyf/beego) ，再提PR。

