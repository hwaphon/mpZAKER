<template>
  <section class="Info">
    <nav class="Info-nav" :style="{ marginTop: getSBH + 'px', height: 2 * getSBH + 'px' }">
      <Topbar @click="changeTab"></Topbar>
    </nav>
    <section class="Info-top">
      <div class="top-container">
        <p class="top-title">热门栏目</p>
        <a href="#" class="top-href">查看全部</a>
      </div>
      <div class="top-card">
        <Card v-for="(item, index) in topItems" :key="index" :icon="item.icon" :text="item.text"></Card>
      </div>
    </section>
  </section>
</template>

<script>
import store from '@/store';
import Topbar from '@/components/topbar/index';
import Card from '@/components/card/index';

export default {
  computed: {
    getSBH() {
      return store.getters.getSBH;
    },
  },
  components: {
    Topbar,
    Card,
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
      ],
    };
  },
};

</script>

<style scoped lang="scss">
@import './Info.scss';
</style>
