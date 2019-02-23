<template>
  <div class="monitor">
    <img :src="planet.name | planetImage" :alt="planet.name"  />
    <ul class="planet-info">
      <li>{{planet.name}}</li>
      <li>Rot. / Orb. Period: <span>{{planet.rotation_period}} / {{planet.orbital_period}}</span></li>
      <li>Diameter: <span>{{planet.diameter}}</span></li>
      <li>Climate: <span>{{planet.climate}}</span></li>
      <li>Gravity: <span>{{planet.gravity}}</span></li>
      <li>Terrain: <span>{{planet.terrain}}</span></li>
      <li>Surface on Water: <span>{{planet.surface_water}}</span></li>
      <li>Population: <span>{{planet.population}}</span></li>
      <li>Films: <span>{{planet.films.length}}</span></li>
    </ul>
  </div>
</template>

<script>

  export default {
    name: 'Monitor',
    props: ['planet']
    
  }
</script>

<style scoped lang="scss">
.monitor {
    position: absolute;
    z-index: 11;
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
        @media screen and (max-height: 400px) {
            font-size: 1em;
        }
        margin: 0 0 0 2em;
        padding: 0.5em 1em;
        position: relative;
        border: 0.1em solid #1e2679;
        border-radius: 1em;
        li {
        position: relative;
        &:first-child {
            font-size: 1.6em;
            @media screen and (max-height: 400px) {
                font-size: 1.1em;
            }
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