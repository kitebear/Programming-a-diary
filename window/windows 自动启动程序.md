### Windows 自动启动 bat

创建文件，然后把这个文件放到window开机自动执行的目录中，之后的每次开机都会重新启动这个脚本

```bat
cd /d %~dp0

%1 start "" mshta vbscript:createobject("shell.application").shellexecute("""%~0""","::",,"runas",1)(window.close)&exit

e:

cd e:\kuban-iot-gateway

pm2 start processes.json
```

