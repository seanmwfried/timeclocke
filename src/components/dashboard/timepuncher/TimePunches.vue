<template>
  <v-sheet elevation="10" rounded>
    <TimePunch 
      v-for="(punch, index) in todaysPunches" 
      :key="punch.date" 
      :date="punch.date"
      :punchType="punch.punchType"
      :itemIndex="index"
      />
  </v-sheet>
</template>

<script>
import { mapGetters } from 'vuex';
import TimePunch from './TimePunch';

export default {
  components: {
    TimePunch
  },

  computed: {
    ...mapGetters(['timepunches']),

    //Filter punches to show only punches from today
    todaysPunches() {
      //Get new date object for today and set time to midnight
      const todayAtMidnight = new Date();
      todayAtMidnight.setUTCHours(0);
      todayAtMidnight.setUTCMinutes(0);
      todayAtMidnight.setUTCSeconds(0);

      //Filter out today's punches
      return this.timepunches.filter((timepunch) => {
        return new Date(timepunch.date).getTime() > todayAtMidnight.getTime()
      });
    }
  }

}
</script>

<style>

</style>