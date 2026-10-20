# 电子学生证

参照纸质卡片制作的单页静态网站，同时展示正反面；手机端上下排列，电脑端并排展示。

## 修改内容

打开 `config.js`，修改姓名、学年、编号等字段。若要改用单独的证件照，将照片放到 `assets/`，并在同一个配置文件中设置：

```js
photo: {
  mode: "direct",
  src: "./assets/your-photo.jpg"
}
```

推送修改后的文件与照片，GitHub Pages 会自动更新网页。

## 本地预览

在本目录运行 `python -m http.server 8000`，然后打开 `http://localhost:8000/`。也可以使用任意静态文件服务器。

## 发布

将本目录推送到 GitHub 仓库，在仓库的 **Settings → Pages** 中选择从 `main` 分支的根目录发布。`index.html` 为网站入口。页面上的“打印 / 保存 PDF”使用浏览器内建打印功能。
