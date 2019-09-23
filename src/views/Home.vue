<template>
  <div class="container">
    <!-- <el-button @click="handleGetRandomSong">test</el-button> -->
    <transition name="el-fade-in-linear">
      <div class="content-wrapper" v-show="contentVisible">
        <p v-for="(row, index) in currentSong.text" :key="index">{{ row }}</p>
        <p class="message">{{ currentSong.title }} - {{ currentSong.author }}</p>
      </div>
    </transition>
  </div>
</template>

<script>
import { createComponent, ref } from '@vue/composition-api';

import sleep from '@/utils/sleep';
import songs from '@/assets/data/songs.json';

export default createComponent({
  name: 'home',
  mounted() {
    this.handleGetRandomSong();
    this.handleStartLoop();
    window.addEventListener('blur', () => {
      this.handleStopLoop();
    });
    window.addEventListener('focus', () => {
      this.handleStartLoop();
    });
  },
  setup() {
    const timer = ref('');
    const currentSong = ref(songs[0]);
    const contentVisible = ref(true);

    async function handleGetRandomSong() {
      contentVisible.value = false;
      await sleep(800);
      const { length } = songs;
      const index = Math.floor(Math.random() * length);
      currentSong.value = songs[index];
      contentVisible.value = true;
      console.log(new Date());
    }

    async function handleStartLoop() {
      if (timer.value === '') {
        timer.value = setInterval(handleGetRandomSong, 5000);
      }
    }

    async function handleStopLoop() {
      window.clearInterval(timer.value);
      timer.value = '';
    }

    return {
      timer,
      currentSong,
      contentVisible,
      handleGetRandomSong,
      handleStartLoop,
      handleStopLoop,
    };
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
