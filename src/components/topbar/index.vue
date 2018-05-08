<template>
  <ul class="Topbar">
      <li class="bar-item" v-for="(item, index) in items" :key="index" :class="[ index === actived ? 'bar-item-selected' : '' ]" @click="changeTab(index)">
        {{ item.text }}
      </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { text: '热点' },
        { text: '订阅' },
        { text: '话题' },
        { text: '直播' },
      ],
      actived: 0,
    };
  },
  methods: {
    changeTab(index) {
      this.actived = index;
      this.$emit('click', index);
    },
  },
};
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
