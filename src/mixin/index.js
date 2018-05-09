import store from '@/store';

export default {
  computed: {
    getSBH() {
      return store.getters.getSBH;
    },
  },
};
