<template>
  <section class="Subject">
    <nav class="Subject-nav" :style="{ marginTop: getSBH + 'px', height: 2 * getSBH + 'px' }">
      <img src="/static/images/back.png" alt="back icon" class="nav-back" @click="back">
      <p>栏目广场</p>
    </nav>
    <swiper indicator-dots>
      <block v-for="subject in subjects" :key="subject.id">
        <swiper-item class="swiper-item">
          <img :src="subject.img" alt="subject.title" class="swiper-item-img">
          <span class="swiper-item-title">{{ subject.title }}</span>
        </swiper-item>
      </block>
    </swiper>
  </section>
</template>

<script>
import mixins from '@/mixin/index';
import { get as httpGet } from '@/utils/network';

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
    };
  },
};

</script>

<style scoped lang="scss">
@import './index.scss';
</style>
