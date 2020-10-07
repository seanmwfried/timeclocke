<template>
  <div class="ma-0 pa-1 container text-center">
    <span>{{ formattedTime }}</span>
    <v-divider vertical></v-divider>
    <span>{{ formattedDate }}</span>
    <v-divider vertical></v-divider>
    <span>{{ punchType }}</span>
  </div>
</template>

<script>
export default {
  props: {
    date: String,
    punchType: String
  },

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
.container {
  display: grid;
  grid-template-columns: 1fr 1px 1fr 1px 1fr;
}
</style>