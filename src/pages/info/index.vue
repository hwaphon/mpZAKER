<template>
  <section class="Info">
    <nav class="Info-nav" :style="{ marginTop: getSBH + 'px', height: 2 * getSBH + 'px' }">
      <Topbar @click="changeTab"></Topbar>
    </nav>
  </section>
</template>

<script>
import store from '@/store';
import Topbar from '@/components/topbar';

export default {
  computed: {
    getSBH() {
      return store.getters.getSBH;
    },
  },
  components: {
    Topbar,
  },
  methods: {
    changeTab(index) {
      console.log(index);
    },
  },
};

</script>

<style scoped lang="scss">
@import './Info.scss';
</style>
