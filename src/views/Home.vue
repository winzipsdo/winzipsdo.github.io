<template>
  <div class="container">
    <!-- <el-button @click="handleGetRandomSong">test</el-button> -->
    <transition name="el-fade-in-linear">
      <div class="content-wrapper" v-show="state.contentShow">
        <p v-for="(row, index) in currentSong.text" :key="index">{{row}}</p>
        <p class="message">{{currentSong.title}} - {{currentSong.author}}</p>
      </div>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src

const songs = require('../assets/data/songs.json');

export default {
  name: 'home',
  mounted() {
    window.vue = this;
    this.handleGetRandomSong();
    this.handleStartLoop();
    window.addEventListener('blur', () => {
      this.handleStopLoop();
    });
    window.addEventListener('focus', () => {
      this.handleStartLoop();
    });
  },
  data() {
    return {
      timer: '',
      songs,
      currentSong: songs[0],
      state: {
        contentShow: true,
      },
    };
  },
  methods: {
    async sleep(ms) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, ms);
      });
    },
    async handleGetRandomSong() {
      this.state.contentShow = false;
      await this.sleep(800);
      const { length } = this.songs;
      const index = Math.floor(Math.random() * length);
      this.currentSong = this.songs[index];
      this.state.contentShow = true;
      console.log(new Date());
    },
    async handleStartLoop() {
      if (this.timer === '') {
        this.timer = setInterval(this.handleGetRandomSong, 5000);
      }
    },
    async handleStopLoop() {
      window.clearInterval(this.timer);
      this.timer = '';
    },
  },
};
</script>

<style lang="stylus">

  body
    font-family Serif
    display flex
    flex-direction column
    justify-content center
    align-items center
    height 90vh

  .img-wrapper
    img
      display inline-block
      width 500px

  .content-wrapper
    p
      font-family Serif
    .message
      padding-top 1em
      border-top solid  rgba(100, 100, 100, .2) 1px
</style>
