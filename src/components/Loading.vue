<template>
  <div class="loading">
    <img src="https://vinnycl.github.io/statics/images/galactic-empireo.svg" alt="Loading ...">
    <img src="https://vinnycl.github.io/statics/images/galactic-empirei.svg" alt="Loading ...">
  </div>
</template>

<script>
  export default {
    name: "Loading"
  }
</script>

<style scoped lang="scss">
    @keyframes spin { 
        100% { 
            transform:rotate(360deg);
        }
    }
    @keyframes spinr { 
        100% { 
            transform:rotate(-360deg);
        }
    }
    .loading {
        position: fixed;
        z-index: 11;
        width: 200px;
        height: 200px;
        left: 50%;
        top: 50%;
        margin: -100px 0 0 -100px;
        img {
            position: absolute;
            
        }
        img:nth-child(1) {
            animation: spin 6s linear infinite;
        }
        img:nth-child(2) {
            animation: spinr 6s linear infinite;
        }
    }
</style>