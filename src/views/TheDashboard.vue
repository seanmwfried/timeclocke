<template>
  <div class="container">
    <TimePuncher/>
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