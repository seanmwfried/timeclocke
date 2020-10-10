<template>
  <v-card elevation="0" class="day-container">
    <v-card-title class="grey darken-4 white--text justify-center flex-column text-center">
      <div>{{ dayName }}</div>
      <div class="text-subtitle-1">{{ monthAndDayDate }}</div>
    </v-card-title>
    <v-card-text class="black--text pa-0">
      <HistoryTimePunch 
        v-for="(punch, index) in filteredPunches" 
        :key="index" 
        :listIndex="index"
        :punchType="punch.punchType"
        :punchDate="punch.date"
      />
      <div v-if="filteredPunches.length === 0" class="text-center pa-3">No punches.</div>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';
import HistoryTimePunch from './HistoryTimePunch';

export default {
  components: {
    HistoryTimePunch
  },

  props: {
    day: Date
  },

  computed: {
    ...mapGetters(['timepunches']),

    //Get name of day
    dayName() {
      return [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
        ][this.day.getDay()]
    },

    //Get numbered date
    monthAndDayDate() {
      return `${this.day.getMonth() + 1}/${this.day.getDate()}`;
    },

    filteredPunches() {
      return this.timepunches.filter((timepunch) => {
        //Get tomorrow
        const tomorrow = new Date(this.day);
        tomorrow.setDate(this.day.getDate() + 1);
        //Get date object for timepunch
        const punch = new Date(timepunch.date);
        //Filter between midnight this day and midnight the next
        return (
          punch.getTime() > this.day.getTime() && 
          punch.getTime() < tomorrow.getTime()
        );
      })
    }


  }
}
</script>

<style>
.day-container {
  min-width: 145px;
  width: 100%;
}
</style>