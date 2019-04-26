## GIT操作

------

git rm -r **PATH** (强制删除PATH)



#### fork了别人的代码-更新远程分支的代码

git remote -v 
git remote add upstream git@github.com:xxx/xxx.git
git fetch upstream
git merge upstream/master
git push 



### 强制回滚

git reset --hard 2216d4e

// 查看git操作hash

git reflog

// 再回到feature-6

git reset --hard cd52afc