import Vue from 'vue';
import VueCompositionApi, { reactive, provide, inject } from '@vue/composition-api';

Vue.use(VueCompositionApi);

const StoreSymbol = Symbol('store');

const store = reactive({
  stayedTime: 0,
  changedTimes: 0,
});

export const mutations = {
  setStayedTime(payload) {
    store.stayedTime = payload;
  },
  setChangedTimes(payload) {
    store.changedTimes = payload;
  },
};

export function provideStore(_store) {
  provide(StoreSymbol, _store);
}

/**
 * @returns {typeof store}
 */
export function useStore() {
  return inject(StoreSymbol);
}

export default store;
