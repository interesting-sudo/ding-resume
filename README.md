# 个人主页

使用 HTML、CSS 和少量 JavaScript 制作的响应式个人主页，适合直接部署至 GitHub Pages。

在线访问：<https://interesting-sudo.github.io/ding-resume/>

## 联系方式

主页已按本人提供的信息展示姓名、邮箱和电话。需要修改公开联系方式时，在 `index.html` 中搜索对应文字与 `mailto:`、`tel:` 链接并同步替换。

学号仅用于向教师提交实验报告，不上传到公开仓库。

## 页面结构

- `index.html`：语义化内容与页面模块。
- `style.css`：浅色视觉主题、布局及响应式断点。
- `script.js`：手机导航菜单和页脚年份。

## 本地预览

在本目录运行 `python3 -m http.server 8765`，访问 `http://127.0.0.1:8765/`。无需安装前端依赖。
