# 个人主页

使用 HTML、CSS 和少量 JavaScript 制作的响应式个人主页，适合直接部署至 GitHub Pages。

在线访问：<https://interesting-sudo.github.io/ding-resume/>

## 发布前替换

在 `index.html` 中搜索并替换：

- `你的姓名`：替换为希望公开展示的姓名或昵称。
- `your.email@example.com`：替换为希望公开展示的邮箱（页面文字与 `mailto:` 链接都要替换）。

**不要把学号、身份证号、家庭住址或不希望公开的电话号码写入公开网页。** 实验报告中的学号只用于提交给教师，不应上传到公开仓库。

## 页面结构

- `index.html`：语义化内容与页面模块。
- `style.css`：浅色视觉主题、布局及响应式断点。
- `script.js`：手机导航菜单和页脚年份。

## 本地预览

在本目录运行 `python3 -m http.server 8765`，访问 `http://127.0.0.1:8765/`。无需安装前端依赖。
