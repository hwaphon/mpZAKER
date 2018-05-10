<template>
  <section class="Article">
    <scroll-view scroll-y class="scroll-view" :style="{ paddingTop: getSBH + 'px' }" scroll-with-animation>
      <nav class="Article-nav" :style="{ top: getSBH + 'px', height: 2 * getSBH + 'px' }">
        <img src="/static/images/back.png" alt="back icon" class="nav-back" @click="back">
      </nav>
      <article class="Article-content" :style="{ marginTop: 2 * getSBH + 'px' }"w>
        <header>
          <h1 class="title">{{ query.title }}</h1>
          <span class="author">{{ query.author }}</span>
          <span class="date">{{ query.date }}</span>
        </header>
      </article>
    </scroll-view>
  </section>
</template>

<script>
import mixins from '@/mixin/index';

export default {
  mixins: [mixins],
  methods: {
    back() {
      wx.navigateBack();
    },
  },
  onLoad() {
    this.query = this.$root.$mp.query || {};
  },
  data() {
    return {
      query: {},
    };
  },
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
