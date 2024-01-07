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
