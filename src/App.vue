<template>
  <v-app>
    <TheNavigation v-if="isLoggedIn"/>
    <v-main>
      <div class="app-container">
        <router-view></router-view>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';
import TheNavigation from '@/components/nav/TheNavigation.vue';

export default {
  name: 'App',

  components: {
    TheNavigation
  },

  data: () => ({
    drawer: null,
  }),

  computed: {
    ...mapGetters(['isLoggedIn'])
  }
};
</script>

<style scoped>
.app-container {
  background-image: linear-gradient(to right, #bbb, #fff, #bbb);
  height: 100vh;
  overflow-x: hidden;
}
</style>