<template>
  <div class="universe">
        <div class="stars"></div>
        <div class="twinkling"></div>
  </div>
</template>

<script>
  export default {
    name: 'Universe'
  }
</script>

<style scoped>

@keyframes move-twink-back {
    from {background-position:0 0;}
    to {background-position:-10000px 5000px;}
}

.stars, .twinkling {
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  width:100%;
  height:100%;
  display:block;
}

.stars {
  background: url(https://vinnycl.github.io/statics/images/stars.png) repeat top center;
  z-index:0;
}

.twinkling{
  background: url(https://vinnycl.github.io/statics/images/twinkling.png) repeat top center;
  z-index:1;
  animation:move-twink-back 200s linear infinite;
}
</style>