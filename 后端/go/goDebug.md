Debugging

1. Install `delve`: `https://github.com/go-delve/delve/tree/master/Documentation/installation`

On Mac:

xcode-select --install

go get -u github.com/go-delve/delve/cmd/dlv

2. Add `.vscode/launch.json`

json

```json
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Launch",
      "type": "go",
      "request": "launch",
      "mode": "exec",
      "port": 2345,
      "host": "127.0.0.1",
      "program": "${workspaceRoot}/bin/openaccess-debug",
      "env": {},
      "args": [],
      "showLog": true
   }
  ]
}
```

3. Start Delve Debug Server:

```shell
dlv debug --headless --listen=:2345 --log
```

3. Build Binary:

```shell
buffalo build -t -gcflags='-N -l' -o bin/openaccess-debug
```

4. Start Debug:

```shell
F5` Or `VSCode -> Debug -> Start Debugging
```

Check VS Code DEBUG CONSOLE.

5. Stop Debug: `VSCode -> Debug -> Stop Debugging`

6. Kill Delve Server: `kill -9 pid`