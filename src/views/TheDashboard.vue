<template>
  <div class="dashboard ma-5">
    <h1 class="text-center text-h2 ma-5">
      <span class="font-weight-regular">dash</span><span class="font-weight-thin">board</span>
    </h1>    
    <div class="content-container d-flex justify-space-around flex-wrap">
      <TimePuncher/>
      <HistoryCalendar/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TimePuncher from '../components/dashboard/TimePuncher/TimePuncher';
import HistoryCalendar from '../components/dashboard/HistoryCalendar/HistoryCalendar';

export default {
  components: {
    TimePuncher,
    HistoryCalendar
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
.content-container {
  align-items: flex-start;
}
</style>