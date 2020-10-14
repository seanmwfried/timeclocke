<template>
  <v-card rounded class="history-container mb-5">
    <v-card-title class="grey darken-4 white--text justify-center">
      <v-icon left dark>mdi-calendar-month</v-icon>
      Weekly History
    </v-card-title>
    <v-card-text class="pa-5 d-flex flex-column">
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn 
            v-bind="attrs" 
            v-on="on" 
            class="history-date-picker mb-5 grey lighten-3"
            elevation="10"
          >Change Week</v-btn>
        </template>
        <v-date-picker color="grey darken-2" v-model="datePickerDate"></v-date-picker>
      </v-menu>
      <v-card elevation="10" class="history-week-container">
        <template v-for="i in 7" >
          <HistoryDay 
            class="rounded-0" 
            :day="getDateRelativeToSunday(i - 1)" 
            :key="getDateRelativeToSunday(i - 1).toISOString()"
          />
          <v-divider v-if="i !== 7" :key="i - 1" class="d-none d-lg-block"></v-divider>
        </template>
      </v-card>
    </v-card-text>
  </v-card>
</template>

<script>
import HistoryDay from './HistoryDay';

export default {
  components: {
    HistoryDay
  },

  data: () => ({
    datePickerDate: null
  }),

  methods: {
    getDateRelativeToSunday(index) {
      //Start from sunday and look forward to get dates
      const newDate = new Date(this.sunday);
      newDate.setDate(this.sunday.getDate() + index);
      //Start from midnight
      newDate.setHours(0);
      newDate.setMinutes(0);
      newDate.setSeconds(0);
      newDate.setMilliseconds(0);
      return newDate;
    }
  },

  computed: {
    sunday() {
      //App is prepopulated with today's information
      let today;

      if(this.datePickerDate){
        //This is really weird, but the date picker returns a string in the following format: "2020-10-04"
        //If this is fed into Date(), we get a UTC Date and not local time.
        //However, if we add "T00:00" to make it similar to the ISO format, it converts it to local time.
        //Weird... but it works
        today = new Date(`${this.datePickerDate}T00:00`);
      } else {
        //Otherwise, regular ole Date() will return a local Date object
        today = new Date();
      }

      //Get day of week. Returns 0-6, 0 being Sunday
      const dayOfTheWeek = today.getDay();
      //Get day of the month. Returns 1-31
      const dayOfTheMonth = today.getDate();
      //Subtract dayOfTheWeek from dayOfTheMonth to get Sunday's date
      const sunday = new Date();
      console.log(dayOfTheMonth, dayOfTheWeek, dayOfTheMonth - dayOfTheWeek);
      sunday.setDate(dayOfTheMonth - dayOfTheWeek);
      //Start from midnight
      sunday.setHours(0);
      sunday.setMinutes(0);
      sunday.setSeconds(0);

      return sunday;
    }
  }
}
</script>

<style scoped lang="scss">
.history-container {
  width: 100%;
  max-width: 500px;
  
  @include breakpoint(lg) {
    & {
      max-width: 1200px;
    }
  }
}

.history-week-container {
  display: grid;
  overflow: hidden;
  grid-template-columns: 1fr;

  @include breakpoint(lg) {
    & {
      grid-template-columns: repeat(6, 1fr 1px) 1fr;
    }
  }

}

.history-date-picker {
  width: 290px;
  margin: auto;

  @include breakpoint(lg) {
    // width: 500px;
  }
}
</style>