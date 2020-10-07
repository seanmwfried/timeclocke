<template>
  <v-sheet elevation="1" class="ma-0 pa-1 d-flex flex-column justify-space-around flex-sm-row text-center text-sm-left">
    <div>{{ formattedTime }}</div>
    <div>{{ formattedDate }}</div>
    <div>Start Lunch</div>
  </v-sheet>
</template>

<script>
export default {
  props: {
    // date: Date,
    punchType: String
  },

  data: () => ({
    date: "2011-10-06T19:48:42.000Z"
  }),

  computed: {
    formattedTime() {      
      return this.formatDate("time");
    },

    formattedDate() {
      return this.formatDate("date");
    }
  },

  methods: {
    formatDate(type) {
      const dateTime = new Date(this.date);
      let formatOptions = {};

      if(type == "time") {
        formatOptions = {
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric'
        }
      } else if (type == "date") {
        formatOptions = {
          weekday: 'short',
          day: 'numeric',
          month: 'short',
          year: 'numeric'
        }
      }

      return Intl.DateTimeFormat('en-US', formatOptions).format(dateTime);
    }
  }
}
</script>

<style scoped>
article {
 
}
</style>