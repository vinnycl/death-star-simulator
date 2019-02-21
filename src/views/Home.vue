<template>

  <div class="home">
    <universe></universe>
    <cockpit></cockpit>
    <planets></planets>
  </div>
</template>

<script>
import Cockpit from '@/components/Cockpit.vue';
import Universe from '@/components/Universe.vue';
import Planets from '@/components/Planets.vue';
import Introduction from '@/components/Introduction.vue';
export default {
  components: {
      Cockpit,
      Universe,
      Planets,
      Introduction
  }
}
</script>

<style >


</style>
