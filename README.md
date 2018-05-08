# 开发记录

### 20180507

项目中使用到的图片，只有放置在 `static` 目录下，才可以正常访问。[参考链接](https://github.com/Meituan-Dianping/mpvue/issues/94)

### 20180508

1. 小程序的 `globalData` 在 `mpVue` 下不可以使用，共享全局变量需要使用 `Vuex`。

2. 样式文件可使用 `scss` 预处理，不需要任何配置，安装 `sass-loader` 和 `node-sass` 就可以直接使用。[参考链接](https://github.com/Meituan-Dianping/mpvue/issues/232)

3. 同一个组件，有的时候可能需要有不同的样式，比如不同的背景，不同的字体大小等。由于 `mpvue` 并不能绑定一个 `styleObject`。有一种做法是先把样式写好，并以不同的名字命名。

      .card-img-bg-0 {
          background-image: linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);
      }

      .card-img-bg-1 {
        background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
      }

      .card-img-bg-2 {
        background-image: linear-gradient(to top, #f77062 0%, #fe5196 100%);
      }

      .card-img-bg-3 {
        background-image: linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%);
      }

然后在 `computed` 中定义好方法，返回要使用的类名即可。类可随机也可根据 `props` 中的属性进行选择。

    computed: {
      bgClass() {
        const length = 4;
        const index = Math.floor(Math.random() * length);
        return `card-img-bg-${index}`;
      }
    }
