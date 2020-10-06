<template>
  <div class="container">
    Dashboard
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {

  computed: {
    ...mapGetters(['isLoggedIn']),

  },

  beforeMount() {
    if(!this.isLoggedIn){
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>

</style>