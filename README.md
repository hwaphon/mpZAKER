# 介绍

本着试试 `mpvue` 的态度开发此程序，界面主要是模仿 `ZAKER` 新闻，数据全部是由 `Mock` 随机生成的，使用的是 [Easy-Mock](https://easy-mock.com/) 服务。本程序只开发了的几个页面，尝试了自定义组件，路由跳转及参数传递等功能。再开发下去只是组件的堆积和页面的拼装，所以停止了开发。几个页面的预览图如下所示：

![image](http://p8jjkgbde.bkt.clouddn.com/css_sprites.png)

# 安装

    git clone https://github.com/hwaphon/mpZAKER.git
    cd mpZAKER && yarn
    yarn dev

可以在自己喜欢的编译器中进行开发（Sublime，Atom 或其它），然后在微信开发工具中查看实时效果即可。

# 开发记录

### 20180507

项目中使用到的图片，只有放置在 `static` 目录下，才可以正常访问。[参考链接](https://github.com/Meituan-Dianping/mpvue/issues/94)

### 20180508

小程序的 `globalData` 在 `mpVue` 下不可以使用，共享全局变量需要使用 `Vuex`。

样式文件可使用 `scss` 预处理，不需要任何配置，安装 `sass-loader` 和 `node-sass` 就可以直接使用。[参考链接](https://github.com/Meituan-Dianping/mpvue/issues/232)

同一个组件，有的时候可能需要有不同的样式，比如不同的背景，不同的字体大小等。由于 `mpvue` 并不能绑定一个 `styleObject`。有一种做法是先把样式写好，并以不同的名字命名。

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

### 20180509

所有页面的 `created` 方法都会在首页加载时触发，如果每个页面都有 `http` 请求时，这种机制就不是很合理了。虽然 `mpvue` 官方不推荐使用小程序自身的生命钩子方法，但是面对这种情况只能使用 `onLoad` 方法。[参考链接](https://github.com/Meituan-Dianping/mpvue/issues/405)
