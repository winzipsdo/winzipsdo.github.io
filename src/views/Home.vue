<template>
  <div>
    <p class="img-wrapper" align="center">
      <img src="@/assets/test1.png" />
    </p>
    <p class="img-wrapper" align="center">
      <img src="@/assets/test2.png" />
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
