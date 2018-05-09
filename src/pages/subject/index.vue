<template>
  <section class="Subject">
    <nav class="Subject-nav" :style="{ marginTop: getSBH + 'px', height: 2 * getSBH + 'px' }">
      <img src="/static/images/back.png" alt="back icon" class="nav-back" @click="back">
      <p>栏目广场</p>
    </nav>
    <swiper indicator-dots indicator-color="#FFF" indicator-active-color="#C0C4CC" autoplay>
      <block v-for="subject in subjects" :key="subject.id">
        <swiper-item class="swiper-item">
          <img :src="subject.img" alt="subject.title" class="swiper-item-img">
          <span class="swiper-item-title">{{ subject.title }}</span>
        </swiper-item>
      </block>
    </swiper>
    <div class="card-container">
      <block v-for="(item, index) in topItems" :key="index">
          <Card :icon="item.icon" :text="item.text"></Card>
      </block>
    </div>
  </section>
</template>

<script>
import mixins from '@/mixin/index';
import { get as httpGet } from '@/utils/network';
import Card from '@/components/card/index';

export default {
  mixins: [mixins],
  methods: {
    back() {
      wx.navigateBack();
    },
  },
  onLoad() {
    httpGet('https://easy-mock.com/mock/5af271d58ecbd84d95de2554/zaker/subject')
      .then((res) => {
        if (res.statusCode === 200) {
          this.subjects = res.data.data.subjects;
        }
      });
  },
  data() {
    return {
      subjects: [],
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
    };
  },
  components: {
    Card,
  },
};

</script>

<style scoped lang="scss">
@import './index.scss';
</style>
