import Vue from 'vue';
import App from './App';

Vue.config.productionTip = false;
App.mpType = 'app';

const app = new Vue(App);
app.$mount();

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/info/main', 'pages/videos/main', 'pages/community/main', 'pages/user/main'],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black',
      navigationStyle: 'custom',
    },
    tabBar: {
      list: [
        { pagePath: 'pages/info/main', text: '资讯', iconPath: 'static/images/info.png', selectedIconPath: 'static/images/info-selected.png' },
        { pagePath: 'pages/videos/main', text: '视频', iconPath: 'static/images/videos.png', selectedIconPath: 'static/images/videos-selected.png' },
        { pagePath: 'pages/community/main', text: '社区', iconPath: 'static/images/community.png', selectedIconPath: 'static/images/community-selected.png' },
        { pagePath: 'pages/user/main', text: '我的', iconPath: 'static/images/user.png', selectedIconPath: 'static/images/user-selected.png' },
      ],
      backgroundColor: '#FFF',
      borderStyle: '#E8E8E8',
      color: '#303133',
      selectedColor: '#F53438',
    },
  },
};
