<template>
  <v-card>
    <v-card-title class="grey darken-4 white--text justify-center">
      Time Punch
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12">
            <TimePunch v-for="i in 5" :key="i"/>
          </v-col>
          <v-col cols="12">
            <v-btn dark width="100%" class="my-1">Clock In</v-btn>
            <v-btn dark width="100%" class="my-1">Start Break</v-btn>
            <v-btn dark width="100%" class="my-1">Start Lunch</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import TimePunch from '../../TimePunch';

export default {
  components: {
    TimePunch
  }

}
</script>

<style>

</style>