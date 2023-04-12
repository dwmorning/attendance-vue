# 介绍

本项目参考**某课**Vue3 + React18 + TS4 入门到实战，

- master分支为相关实现代码
- OnlinePreview分支是打包后生成的文件，并可访问[attendance-vue](https://dwmorning.github.io/attendance-vue)使用
  - 需要注意:某课提供的请求时http，而githubpage使用https,在访问无法登录，或者控制台打印该错误，只需要修改如下就可。

    ![1681270865509](image/README/1681270865509.png)

    ![1681270917720](image/README/1681270917720.png)

    ![1681270987842](image/README/1681270987842.png)
  - 仅仅是https访问http的原因，没有其他安全问题。
- attendance-vite-pinia分支为修改后的vite-pinia版本
- 如上请求接口是某课提供的，某课的访问地址是[某课地址](http://vue.h5ke.top/login)

# attendance-vue

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```
