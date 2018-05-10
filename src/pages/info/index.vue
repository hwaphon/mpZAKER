<template>
  <section class="Info">
    <nav class="Info-nav" :style="{ marginTop: getSBH + 'px', height: 2 * getSBH + 'px' }">
      <Topbar @click="changeTab"></Topbar>
    </nav>
    <section class="Info-top">
      <div class="top-container">
        <p class="top-title">热门栏目</p>
        <a href="/pages/subject/main" class="top-href">查看全部</a>
      </div>
      <div class="top-card">
        <Card v-for="(item, index) in topItems" :key="index" :icon="item.icon" :text="item.text"></Card>
      </div>
    </section>
    <section class="Info-list">
      <ListItem v-for="(item, index) in news" :key="index" :title="item.title" :author="item.author" :date="item.date" :imgs="item.imgs"></ListItem>
    </section>
  </section>
</template>

<script>
import Topbar from '@/components/topbar/index';
import Card from '@/components/card/index';
import ListItem from '@/components/listitem/index';
import mixins from '@/mixin/index';
import { get as httpGet } from '@/utils/network';
import API from '@/const/api';

export default {
  mixins: [mixins],
  components: {
    Topbar,
    Card,
    ListItem,
  },
  methods: {
    changeTab(index) {
      console.log(index);
    },
  },
  data() {
    return {
      topItems: [
        { icon: '/static/images/moring.png', text: '早报' },
        { icon: '/static/images/ball.png', text: '今日体坛' },
        { icon: '/static/images/message.png', text: '十说今日' },
        { icon: '/static/images/star.png', text: '星八刻' },
        { icon: '/static/images/phone.png', text: '新机速递' },
        { icon: '/static/images/trophy.png', text: '赛果速递' },
        { icon: '/static/images/movies.png', text: '影迷小宝鉴' },
        { icon: '/static/images/cup.png', text: '下午茶' },
        { icon: '/static/images/moon.png', text: '夜读' },
      ],
      news: [],
    };
  },
  onLoad() {
    httpGet(API.NEWS)
      .then((res) => {
        if (res.statusCode === 200) {
          this.news = res.data.data.list;
        }
      });
  },
};

</script>

<style scoped lang="scss">
@import './Info.scss';
</style>
