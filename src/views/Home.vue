<template>

  <div class="home">
    <universe></universe>
    <cockpit></cockpit>
    
  </div>
</template>

<script>
import Cockpit from '@/components/Cockpit.vue';
import Universe from '@/components/Universe.vue';
export default {
  components: {
      Cockpit,
      Universe
  }
}
</script>

<style >


</style>
