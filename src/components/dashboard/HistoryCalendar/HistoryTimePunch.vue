<template>
  <div width="100%" class="history-time-punch-container text-center px-0" :class="colorOffset">
    <span>{{ punchType }}</span>
    <span>{{ punchTimeFormatted }}</span>
  </div>
</template>

<script>
export default {
  props: {
    listIndex: Number,
    punchType: String,
    punchTime: String
  },

  computed: {
    punchTimeFormatted() {
      const formatOptions = {
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric'
        }
      return Intl.DateTimeFormat('en-US', formatOptions).format(this.punchTime);
    },
  
    colorOffset() {
      return this.listIndex % 2 == 1 ? 'grey lighten-3' : '';
    }
  }
}
</script>


<style scoped>
.history-time-punch-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>