<template>
  <v-hover v-slot:default="{ hover } ">
    <div 
      :class='defaultStyle + " " + 
              (itemIndex % 2 == 1 && !hover ? offsetStyle : "") + " " +
              (hover ? hoverStyle : "")'
    >
      <span>{{ formattedTime }}</span>
      <v-divider vertical></v-divider>
      <span>{{ formattedDate }}</span>
      <v-divider vertical></v-divider>
      <span>{{ punchType }}</span>
    </div>
  </v-hover>
</template>

<script>
export default {
  data: () => ({
    defaultStyle: 'punch-container ma-0 pa-1 text-center',
    offsetStyle: 'grey lighten-3',
    hoverStyle: 'grey white--text'
  }),

  props: {
    date: String,
    punchType: String,
    itemIndex: Number
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
.punch-container {
  display: grid;
  grid-template-columns: 1fr 1px 1fr 1px 1fr;
  align-items: center;
  cursor: pointer;
}
</style>