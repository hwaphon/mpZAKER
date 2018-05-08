<template>
  <div class="Info" :style="{ marginTop: getSBH + 'px', height: 2 * getSBH + 'px' }">Info</div>
</template>

<script>
import store from '@/store';

export default {
  mounted() {
    console.log(this.getSBH);
  },
  computed: {
    getSBH() {
      return store.getters.getSBH;
    },
  },
};

</script>

<style scoped lang="scss">
@import './Info.scss';
</style>
