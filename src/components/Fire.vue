<template>
    <div class="fire">
      <video id="explosionVideo" >
          <source src="https://vinnycl.github.io/statics/videos/fast-explosion.mp4" type="video/mp4">
          Your browser does not support the video tag.
      </video>
    </div>
</template>

<script>
  export default {
    name: "Fire"
  }
</script>

<style scoped lang="scss">
  .fire {
    video {
        position: fixed;
        z-index: 13;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
  }
</style>