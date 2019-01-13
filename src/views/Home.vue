<template>
  <div class="home">
    <p class="img-wrapper" align="center">
      <img src="@/assets/test1.png" />
    </p>
    <p class="img-wrapper" align="center">
      <img src="@/assets/test2.png" />
    </p>
    <p style="width: 100%; text-align: center;">
      垂緌饮清露<br />
      流响出疏桐<br />
      居高声自远<br />
      非是藉秋风
    </p>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
};
</script>

<style lang="stylus">
  body
    font-family Serif

  .img-wrapper
    img
      display inline-block
      width 500px
</style>
