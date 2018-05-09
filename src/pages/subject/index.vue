<template>
  <section class="Subject">
    <nav class="Subject-nav" :style="{ marginTop: getSBH + 'px', height: 2 * getSBH + 'px' }">
      <p>栏目广场</p>
    </nav>
  </section>
</template>

<script>
import mixins from '@/mixin/index';

export default {
  mixins: [mixins],
};

</script>

<style scoped lang="scss">
@import './index.scss';
</style>
