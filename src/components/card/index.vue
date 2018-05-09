<template>
  <div class="Card">
    <div class="card-img-container" :class="bgClass">
      <img :src="icon" alt="icon" class="card-img">
    </div>
    <span class="card-title">{{ text }}</span>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
  },
  computed: {
    bgClass() {
      const length = 7;
      const index = Math.floor(Math.random() * length);
      return `card-img-bg-${index}`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
