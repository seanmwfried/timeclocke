<template>
  <v-card elevation="0" class="day-container">
    <v-card-title class="grey darken-4 white--text justify-center">
      {{ dayName }}
    </v-card-title>
    <v-card-text class="black--text pa-0">
      test test test
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    day: Number
  },

  computed: {
    dayName() {
      return [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
        ][this.day]
    },


  }
}
</script>

<style>
.day-container {
  width: 100%;
}
</style>