<template>
  <div class="container">
    <lyrics></lyrics>
    <child-one></child-one>
    <child-two></child-two>
  </div>
</template>

<script>
import { createComponent } from '@vue/composition-api';

import Lyrics from '@/components/Lyrics.vue';

import store, { provideStore, useStore } from '@/store';

const ChildOne = createComponent({
  name: 'child-one',
  setup() {
    const store = useStore(); // eslint-disable-line
    return { store };
  },
  render() {
    return <div>child one</div>;
  },
});

const ChildTwo = createComponent({
  name: 'child-two',
  setup() {
    const store = useStore(); // eslint-disable-line
    return { store };
  },
  render() {
    return <div>child two</div>;
  },
});

export default createComponent({
  name: 'home',
  components: { Lyrics, ChildOne, ChildTwo },
  setup() {
    provideStore(store);
  },
});
</script>

<style lang="stylus">
body {
  font-family: Serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
}

.img-wrapper {
  img {
    display: inline-block;
    width: 500px;
  }
}

.content-wrapper {
  p {
    font-family: Serif;
  }

  .message {
    padding-top: 1em;
    border-top: solid rgba(100, 100, 100, 0.2) 1px;
  }
}
</style>
