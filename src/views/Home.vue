<template>
  <div class="container">
    <transition name="el-fade-in-linear">
      <div class="content-wrapper" v-show="contentVisible">
        <p v-for="(row, index) in currentSong.text" :key="index">{{ row }}</p>
        <p class="message">{{ currentSong.title }} - {{ currentSong.author }}</p>
      </div>
    </transition>
  </div>
</template>

<script>
import { createComponent } from '@vue/composition-api';

import useGetSongsInfo from '@/hooks/useGetSongsInfo';

export default createComponent({
  name: 'home',
  setup() {
    const { contentVisible, currentSong } = useGetSongsInfo();
    return { contentVisible, currentSong };
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
