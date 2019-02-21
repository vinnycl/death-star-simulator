<template>
  <div class="planets">
    <img src="../assets/images/planets/Tatooine.png" />
    <ul class="planet-info">
      <li>Tatooine</li>
      <li>Rot. / Orb. Period: <span>0 / 0</span></li>
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
    width: 650px;
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
          background: rgba(30, 38, 121, 0.8);
          display: block;
          position: absolute;
          content: "";
          width: 0.13em;
          height: 0.13em;
          
        }
        &:after, &:nth-child(1):before, &:last-child:before {
          display: none;
        }        
        &:before {
          width: 6em;
          left: -7.1em;
          top: 1em;
        }
        &:nth-child(3):before {
          width: 7em;
          left: -8.1em;
        }
        &:nth-child(4):before {
          width: 4em;
          left: -5.1em;
        }
        &:nth-child(5):before {
          width: 8em;
          left: -9.1em;
        }
        &:nth-child(7):before {
          width: 5em;
          left: -6.1em;
        }
        &:nth-child(8):before {
          width: 8em;
          left: -9.1em;
        }
        &:nth-child(8):after {
          display: block;
          width: 0.12em;
          left: -9.1em;
          height: 2em;
          top: -1em;
        }
      }
      span {
        font-weight: initial;
      }
    }
  }
  
</style>