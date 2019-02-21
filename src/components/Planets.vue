<template>
  <div class="planets">
    <img src="../assets/images/planets/Tatooine.png" />
    <ul class="planet-info">
      <li>Tatooine</li>
      <li>Rotation / Orbital Period: <span>0 / 0</span></li>
      <li>Diameter: <span>0</span></li>
      <li>Climate: <span>0</span></li>
      <li>Gravity: <span>0</span></li>
      <li>Terrain: <span>0</span></li>
      <li>Surface on Water: <span>0</span></li>
      <li>Population: <span>0</span></li>
      <li>Films: <span>0</span></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Planets'
  }
</script>

<style scoped lang="scss">
  .planets {
    position: absolute;
    z-index: 4;
    width: 568px;
    height: 320px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    .planet-info {
      color: #c9d8f9;
      list-style: none;
      font-weight: 700;
      font-size: 1.2em;
      margin: 0 0 0 2em;
      padding: 0.5em 1em;
      position: relative;
      border: 0.1em solid #1e2679;
      border-radius: 1em;
      li {
        position: relative;
        &:first-child {
          font-size: 1.6em;
          color: #5780f2;
          text-transform: uppercase;
        }
        &:after, &:before {
          background: #1e2679;
          display: block;
          position: absolute;
          content: "";
          width: 0.2em;
          height: 0.2em;
          left: -4em;
        }
        &:before {
          width: 2em;
        }
      }
      span {
        font-weight: initial;
      }
    }
  }
  
</style>