<template>
  <div>
    <v-app-bar dark app class="bar">
      <v-btn @click="drawer = true" class="px-0" elevation="0">
        <v-icon large>
          mdi-menu
        </v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <div class="text-h5">
        <span class="font-weight-regular">time</span><span class="font-weight-thin">clocke</span>
      </div>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      dark
      app
    >
      <!-- Avatar Banner -->
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-chip light color="white">{{ userName[0].toUpperCase() }}</v-chip>
        </v-list-item-avatar>
        <v-list-item-title>
          <span class="text-h6">
            {{ userName }}
          </span>
        </v-list-item-title>
        <v-btn @click="drawer = false" dark elevation="0">
          <v-icon>
            mdi-close
          </v-icon>
        </v-btn>
      </v-list-item>
      <v-divider></v-divider>
      <v-list nav class="pa-0">
        <v-list-item-group v-model="menuSelection">
          <!-- Generate Menu -->
          <v-list-item 
            class="px-2 ma-0"
            v-for="menuItem in menuItems"
            :key="menuItem.title"
            :to="menuItem.path"
          >
            <v-list-item-icon>
              <v-icon large>
                {{ menuItem.icon }}
              </v-icon>
            </v-list-item-icon>
            <v-list-item-title>
                {{ menuItem.title }}
            </v-list-item-title>
          </v-list-item>
          <!-- End Menu -->
        </v-list-item-group>
      </v-list>
      <v-divider></v-divider>
      <div class="ma-5 text-right">
        <v-btn 
          class="button" 
          light
          @click="processLogout"
        >Logout</v-btn>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {  
  data: () => ({
    drawer: null,
    menuSelection: 0,
    menuItems: [
      { title: 'Dashboard', icon: 'mdi-view-dashboard', path: '/dashboard' },
      { title: 'Messages', icon: 'mdi-forum', path: '/messages' },
      { title: 'Requests', icon: 'mdi-airplane', path: '/requests' },
    ]
  }),

  methods: {
    ...mapActions(['logout']),
    processLogout() {
      this.logout();
      this.$router.push('/');
    }
  },

  computed: {
    ...mapGetters(['userName']),
  }
}
</script>

<style scoped>
a{
  text-decoration: none;
}

.bar > div {
  padding: 0;
}

.v-list-item--link::before {
  background-color: white;
}

.v-list-item--active .v-list-item__icon,
.v-list-item--active .v-list-item__title {
  color: white;
}
</style>