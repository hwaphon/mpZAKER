<template>
  <section class="Article">
    <scroll-view scroll-y class="scroll-view" :style="{ paddingTop: getSBH + 'px' }" scroll-with-animation>
      <nav class="Article-nav" :style="{ top: getSBH + 'px', height: 2 * getSBH + 'px' }">
        <img src="/static/images/back.png" alt="back icon" class="nav-back" @click="back">
      </nav>
      <article class="Article-content" :style="{ marginTop: 2 * getSBH + 'px' }"w>
        <header class="Article-header">
          <h1 class="title">{{ query.title }}</h1>
          <span class="author">{{ query.author }}</span>
          <span class="date">{{ query.date }}</span>
        </header>
        <block v-for="(item, index) in article" :key="index">
          <p class="Article-p">{{ item.content }}</p>
        </block>
      </article>
    </scroll-view>
  </section>
</template>

<script>
import mixins from '@/mixin/index';
import { get as httpGet } from '@/utils/network';
import API from '@/const/api';

export default {
  mixins: [mixins],
  methods: {
    back() {
      wx.navigateBack();
    },
  },
  onLoad() {
    this.query = this.$root.$mp.query || {};
    httpGet(API.ARTICLE)
      .then((res) => {
        if (res.statusCode === 200) {
          this.article = res.data.data.content;
        }
      });
  },
  data() {
    return {
      query: {},
      article: [],
    };
  },
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
