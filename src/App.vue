<script>
import store from './store';

export default {
  mounted() {
    wx.getSystemInfo({
      success(res) {
        store.commit('setSBH', res.statusBarHeight);
      },
    });
  },
};
</script>

<style>
</style>
