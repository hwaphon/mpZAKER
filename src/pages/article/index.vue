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
      <section class="recommend-list">
        <span class="recommend-tag">精彩推荐</span>
        <ListItem v-for="(item, index) in recommendArticles" :key="index" :title="item.title" :author="item.author" :imgs="item.imgs" @click="goNewsContent(item)"></ListItem>
      </section>
    </scroll-view>
  </section>
</template>

<script>
import mixins from '@/mixin/index';
import { get as httpGet } from '@/utils/network';
import API from '@/const/api';
import ListItem from '@/components/listitem/index';

export default {
  mixins: [mixins],
  methods: {
    back() {
      wx.navigateBack();
    },
    goNewsContent(obj) {
      wx.navigateTo({
        url: `/pages/article/main?title=${obj.title}&author=${obj.author}&date=${obj.date}`,
      });
    },
  },
  onLoad() {
    this.query = this.$root.$mp.query || {};
    // 获取文章内容
    httpGet(API.ARTICLE)
      .then((res) => {
        if (res.statusCode === 200) {
          this.article = res.data.data.content;
        }
      });

    // 获取推荐列表
    httpGet(API.RECOMMEND)
      .then((res) => {
        if (res.statusCode === 200) {
          this.recommendArticles = res.data.data.list;
        }
      });
  },
  data() {
    return {
      query: {},
      article: [],
      recommendArticles: [],
    };
  },
  components: {
    ListItem,
  },
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
