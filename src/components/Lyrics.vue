<template>
  <transition name="el-fade-in-linear">
    <div class="content-wrapper" v-show="contentVisible">
      <p v-for="(row, index) in currentSong.text" :key="index">{{ row }}</p>
      <p class="message">{{ currentSong.title }} - {{ currentSong.author }}</p>
    </div>
  </transition>
</template>

<script>
import useGetSongsInfo from '@/hooks/useGetSongsInfo';

export default {
  name: 'Lyrics',
  setup() {
    const { contentVisible, currentSong } = useGetSongsInfo();
    return { contentVisible, currentSong };
  },
};
</script>
