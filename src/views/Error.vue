<template>
  <div class="error">

      <div class="error-content">
        <h1>It's a trap! An error has occurred!</h1>
        <video autoplay playsinline width="640" height="320"  >
          <source src="https://vinnycl.github.io/statics/videos/error.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
      

      <universe></universe>
  </div>
</template>

<script>
import Universe from '@/components/Universe.vue';
export default {
  components: {
      Universe
  }
}
</script>

<style scoped lang="scss">
@import '../assets/styles/_variables';
.error {
  color: $font-secondary;
  .error-content {
    text-align: center;
    position: absolute;
    z-index: 10;
    width: 100%;
    top: 50%;
    margin-top: -200px;
  }
}

</style>