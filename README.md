# postsys

### 前后端分离配置

请修改`vite.config.js`中`proxy`的值,找到这个部分的代码

```
  server: {
    port: 5098,
    proxy: {
      'api': {
        target: 'http://localhost:9000',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  }
```

port指定前端的服务端口，可自行修改

target指定后端服务端口，请修改端口号为后端服务真实端口

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload

```sh
npm run dev
```

下面这个是发布时指令，可以先不管。

### Compile and Minify for Production

```sh
npm run build
```

### 后端部分
cd到backend文件夹，请确保初始化了golang和mysql环境，安装好golang包依赖。
后端默认运行在http://127.0.0.1:1926上，您可以在backend/app/init.go的StartServer函数中修改这一端口号。

运行后端的方法为
```bash
cd backend && go run main.go 
```


