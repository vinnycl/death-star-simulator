<template>
    <div class="fire">
      <img src="https://vinnycl.github.io/statics/images/uniexplosion.gif" alt="FIRE!">
    </div>
</template>

<script>
  export default {
    name: "Fire"
  }
</script>

<style scoped lang="scss">
  .fire {
    img {
        position: fixed;
        z-index: 5;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }
  }
</style>