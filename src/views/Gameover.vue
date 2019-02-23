<template>
  <div class="gameover">

      <div class="gameover-content">
        <h1>You destroyed all the planets!</h1>
        <video autoplay playsinline width="640" height="320"  >
          <source src="https://vinnycl.github.io/statics/videos/gameover.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
      

      <universe></universe>
  </div>
</template>

<script>
import { planetList, Settings } from '@/planetList.js'
import Universe from '@/components/Universe.vue';
export default {
  components: {
      Universe
  }
}
</script>

<style scoped lang="scss">
@import '../assets/styles/_variables';
.gameover {
  color: $font-secondary;
  .gameover-content {
    text-align: center;
    position: absolute;
    z-index: 10;
    width: 100%;
    top: 50%;
    margin-top: -200px;
  }
}

</style>