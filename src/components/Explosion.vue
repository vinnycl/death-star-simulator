<template>
    <div class="explosion">
        <button @click="onClick" ></button>
    </div>
    
</template>

<script>
  export default {
    name: "Explosion",
    props: {
      onClick: {
        type: Function,
        required: true
      }
    }
  }
</script>

<style scoped lang="scss">

.explosion {
  button {
    position: fixed;
    z-index: 11;
    background: url(https://vinnycl.github.io/statics/images/scifi-btn2.png);
    width: 258px;
    height: 104px;
    bottom: 1em;
    left: 1em;
    border: none;
    cursor: pointer;
    outline: none;
    &:hover {
      background-position: 0 -104px;
    }
    &:active {
      background-position: 0 -209px;
    }
  }
}
</style>