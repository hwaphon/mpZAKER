# 开发记录

### 20180507

项目中使用到的图片，只有放置在 `static` 目录下，才可以正常访问。[参考链接](https://github.com/Meituan-Dianping/mpvue/issues/94)

### 20180508

1. 小程序的 `globalData` 在 `mpVue` 下不可以使用，共享全局变量需要使用 `Vuex`。

2. 样式文件可使用 `scss` 预处理，不需要任何配置，安装 `sass-loader` 和 `node-sass` 就可以直接使用。[参考链接](https://github.com/Meituan-Dianping/mpvue/issues/232)

3. 为元素设置 `hover-class` 后，样式效果在指定时间内就会消失。如果想要选中标签的效果，可使用 `:hover` 选择器。
