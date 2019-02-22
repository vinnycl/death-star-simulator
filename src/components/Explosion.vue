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
.explosion button {
    position: fixed;
    background: red;
    z-index: 11;
    width: 100px;
    height: 30px;
    bottom: 0px;
    left: 0px;
}
</style>