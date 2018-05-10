<script>
import store from './store';

export default {
  mounted() {
    wx.getSystemInfo({
      success(res) {
        console.log(res);
        store.commit('setSBH', res.statusBarHeight);
      },
    });
  },
};
</script>

<style>
page {
  height: 100%;
}
</style>
