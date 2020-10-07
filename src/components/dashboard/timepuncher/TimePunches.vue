<template>
  <v-sheet elevation="10" rounded>
    <TimePunch 
      v-for="(punch, index) in timepunches" 
      :key="punch.date" 
      :date="punch.date"
      :punchType="punch.punchType"
      :class="colorOffset(index)"
      />
  </v-sheet>
</template>

<script>
import { mapGetters } from 'vuex';
import TimePunch from '../../TimePunch';

export default {
  components: {
    TimePunch
  },

  computed: {
    ...mapGetters(['timepunches'])
  },

  methods: {
    colorOffset(index) {
      return index % 2 == 1 ? 'grey lighten-3' : '';
    }
  }

}
</script>

<style>

</style>