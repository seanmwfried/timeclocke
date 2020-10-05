<template>
  <v-app>
    <v-app-bar v-if="isLoggedIn" app dark>
      <v-spacer></v-spacer>
      <v-btn color="pink">Test</v-btn>
    </v-app-bar>
    <v-navigation-drawer v-if="isLoggedIn" app v-model="drawer" dark></v-navigation-drawer>

    <v-main>
      <div class="app-container">
        <router-view></router-view>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'App',

  components: {
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