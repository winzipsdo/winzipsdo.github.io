import { ref, onMounted, onBeforeUnmount } from '@vue/composition-api';

import sleep from '@/utils/sleep';
import songs from '@/assets/data/songs.json';

export default function useGetSongsInfo() {
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

  onMounted(() => {
    handleGetRandomSong();
    handleStartLoop();
    window.addEventListener('blur', handleStopLoop);
    window.addEventListener('focus', handleStartLoop);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('blur', handleStopLoop);
    window.removeEventListener('focus', handleStartLoop);
  });

  return {
    timer,
    currentSong,
    contentVisible,
    handleGetRandomSong,
    handleStartLoop,
    handleStopLoop,
  };
}
