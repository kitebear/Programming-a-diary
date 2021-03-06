**Flutter解决 警告 Waiting for another flutter command to release the startup lock**

此时需要打开 flutter/bin/cache/lockfile，删除就行了

或者直接用下面的命令：rm ./flutter/bin/cache/lockfile



##### Flutter 卡在 package get 的解决办法

```shell
export PUB_HOSTED_URL=https://pub.flutter-io.cn
export FLUTTER_STORAGE_BASE_URL=https://storage.flutter-io.cn
```

