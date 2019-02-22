<template>

  <div class="deathstar">
    <loading v-show="loading"></loading>
    <universe></universe>
    <cockpit></cockpit>
    <monitor :planet="planet"></monitor>
    <explosion :onClick="getInformation" ></explosion>
  </div>
  
</template>

<script>
  import { planetList, Settings } from '@/planetList.js'
  import Cockpit from '@/components/Cockpit.vue';
  import Universe from '@/components/Universe.vue';
  import Monitor from '@/components/Monitor.vue';
  import Explosion from '@/components/Explosion.vue';
  import Loading from '@/components/Loading.vue';
  import planets from '@/services/planets.js';

  import { mapActions } from 'vuex';

  export default {
    name: "Planets",
    data () {
      return {
        loading: false
      }
    },
    components: {
      Cockpit,
      Universe,
      Monitor,
      Explosion,
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
      
      getInformation () {
        this.loading = true;

        

        let infoId = planetList[Math.floor(Math.random()*planetList.length)];
        console.log(planetList);
        console.log(infoId);
        var idElm = planetList.indexOf(infoId);
        if (idElm > -1) {
          planetList.splice(idElm, 1);
        }
        console.log(planetList);
        return planets.getInformation(infoId)
          .then(planet => {
          this.storeInformation(planet);
        })
          .catch(() => this.$router.push('error'))
          .finally(() => this.loading = false);
      }
    }
  }
</script>

<style >


</style>
