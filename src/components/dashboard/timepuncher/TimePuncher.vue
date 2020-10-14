<template>
  <v-card rounded class="punch-container ma-5 mt-0">
    <v-card-title class="grey darken-4 white--text justify-center">
      <v-icon left dark>mdi-clock-time-ten-outline</v-icon>
      Time Punch
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-col cols="12">
            <TimePunches/>
          </v-col>
          <v-col cols="12">
            <v-btn 
              v-if="showClockInOutButton"
              @click="processClockInOutButton"
              dark 
              width="100%" 
              class="my-1"
            >
              {{ clockInOutButtonText }}
            </v-btn>
            <v-btn 
              v-if="showBreakButton"
              @click="processBreakButton"
              dark 
              width="100%" 
              class="my-1"
            >
              {{ breakStartEndButtonText }}
            </v-btn>
            <v-btn 
              v-if="showLunchButton"
              @click="processLunchButton"
              dark 
              width="100%" 
              class="my-1"
            >
              {{ lunchStartEndButtonText}}
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import TimePunches from './TimePunches';

export default {
  components: {
    TimePunches
  },

  computed: {
    ...mapGetters([
      'isClockedIn', 
      'isOnBreak', 
      'isOnLunch'
      ]),

    //Change button text based on current clock in/out, break, and lunch status
    clockInOutButtonText() { return this.isClockedIn ? 'Clock Out' : 'Clock In'; },
    breakStartEndButtonText() { return this.isOnBreak ? 'End Break' : 'Start Break'; },
    lunchStartEndButtonText() { return this.isOnLunch ? 'End Lunch' : 'Start Lunch'; },

    //Hide clock in button when on lunch or break
    showClockInOutButton() { return !(this.isOnBreak || this.isOnLunch) },
    //Hide start break button when not clocked in or on lunch
    showLunchButton() { return !(!this.isClockedIn || this.isOnBreak) },
    //Hide start lunch button when not clocked in or on break
    showBreakButton() { return !(!this.isClockedIn || this.isOnLunch) },
  },

  methods: {
    ...mapActions([
      'clockIn', 
      'clockOut', 
      'startLunch',
      'endLunch',
      'startBreak',
      'endBreak',
      'addTimePunch'
      ]),

      processClockInOutButton() {
        if (this.isClockedIn) {
          this.addTimePunch({punchType: 'Clock Out', date: new Date().toISOString()});
          this.clockOut();
        } else {
          this.addTimePunch({punchType: 'Clock In', date: new Date().toISOString()});
          this.clockIn();
        }
      },

      processLunchButton() {
        if (this.isOnLunch) {
          const a = {punchType: 'End Lunch', date: new Date().toISOString()}
          console.log(a)
          this.addTimePunch(a);
          this.endLunch();
        } else {
          this.addTimePunch({punchType: 'Start Lunch', date: new Date().toISOString()});
          this.startLunch();
        }
      },

      processBreakButton() {
        if (this.isOnBreak) {
          this.addTimePunch({punchType: 'End Break', date: new Date().toISOString()});
          this.endBreak();
        } else {
          this.addTimePunch({punchType: 'Start Break', date: new Date().toISOString()});
          this.startBreak();
        }
      }
  }

}
</script>

<style scoped>
.punch-container {
  width: 100%;
  max-width: 500px;
}
</style>