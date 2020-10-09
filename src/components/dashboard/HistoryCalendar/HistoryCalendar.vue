<template>
  <v-card rounded class="history-container my-5">
    <v-card-title class="grey darken-4 white--text justify-center">
      <v-icon left dark>mdi-calendar-month</v-icon>
      Weekly History
    </v-card-title>
    <v-card-text class="pa-5">
      <v-card elevation="10" class="history-week-container">
        <template v-for="i in 7" >
          <HistoryDay class="rounded-0" :day="i - 1" :key="i - 1"/>
          <v-divider vertical v-if="i !== 7" :key="i - 1"></v-divider>
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
  }
}
</script>

<style>
.history-container {
  width: 100%;
  max-width: 1200px;
}

.history-week-container {
  display: grid;
  overflow: hidden;
  grid-template-columns: repeat(6, 1fr 1px) 1fr;
}

.v-divider {
  
}
</style>