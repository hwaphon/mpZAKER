<template>
  <div class="ListItem" :class="isRow" @click="clickHandler">
    <div class="content-container">
      <p class="title">{{ title }}</p>
      <div class="other">
        <span class="author">{{ author }}</span>
        <span class="date">{{ date }}</span>
      </div>
    </div>
    <div class="img-container-row" v-if="imgs.length === 1">
      <img :src="imgs[0]" alt="img" class="banner">
    </div>
    <div class="img-container-column" v-if="imgs.length > 1">
      <block v-for="(img,index) in imgs" :key="index">
        <img :src="img" alt="img" class="banner">
      </block>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    imgs: {
      type: Array,
      default() {
        return [];
      },
    },
    author: String,
    date: String,
  },
  computed: {
    isRow() {
      return this.imgs.length === 1 ? 'row' : 'column';
    },
  },
  methods: {
    clickHandler() {
      this.$emit('click');
    },
  },
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
