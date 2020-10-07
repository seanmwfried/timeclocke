<template>
  <div class="dashboard ma-5">
    <h1 class="text-center text-h2 ma-5">
      <span class="font-weight-regular">dash</span><span class="font-weight-thin">board</span>
    </h1>    
    <div class="d-flex justify-space-around">
      <TimePuncher/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TimePuncher from '../components/dashboard/timepuncher/TimePuncher';

export default {
  components: {
    TimePuncher
  },

  computed: {
    ...mapGetters(['isLoggedIn']),

  },

  beforeMount() {
    if(!this.isLoggedIn){
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
</style>