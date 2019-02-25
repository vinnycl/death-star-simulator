<template>

  <div class="deathstar">
    <loading v-show="loading"></loading>
    <fire v-show="fire"></fire>
    <universe></universe>
    <cockpit></cockpit>
    <monitor :planet="planet" v-show="monitor"></monitor>
    <explosion :onClick="explodePlanet" ></explosion>
  </div>
  
</template>

<script>
  import { planetList, Settings } from '@/planetList.js'
  import Cockpit from '@/components/Cockpit.vue';
  import Universe from '@/components/Universe.vue';
  import Monitor from '@/components/Monitor.vue';
  import Explosion from '@/components/Explosion.vue';
  import Fire from '@/components/Fire.vue';
  import Loading from '@/components/Loading.vue';
  import planets from '@/services/planets.js';
  import { mapActions } from 'vuex';
  
  export default {
    name: "Planets",
    data () {
      return {
        loading: false,
        fire: false,
        monitor: true,
      }
    },
    components: {
      Cockpit,
      Universe,
      Monitor,
      Explosion,
      Fire,
      Loading
    },
    computed: {
      planet () {
        return this.$store.state.planet;
        
      }
    },
    mounted () {
      this.getInformation();
    },
    methods: {
      ...mapActions ({
        storeInformation: 'information'
      }),
      
      explodePlanet(){
        this.monitor = false;
        this.fire = true;
        document.getElementById("explosionVideo").play(); 
        setTimeout(()=>{
          this.fire = false;
          this.monitor = true;
        },8000);
        this.getInformation();
      },
      getInformation () {
        this.loading = true;      
        

        

        let infoId = planetList[Math.floor(Math.random()*planetList.length)];
        if(planetList.length == 0)
          this.$router.push('gameover');
        else {
          return planets.getInformation(infoId)
          .then(planet => {            
            var idElm = planetList.indexOf(infoId);
            if (idElm > -1) {
              planetList.splice(idElm, 1);
            }
            this.storeInformation(planet);
          })
          .catch(() => this.$router.push('error'))
          .finally(() => 
            this.loading = false,
          );          
        }        
      }
    }
  }
</script>

<style >


</style>
