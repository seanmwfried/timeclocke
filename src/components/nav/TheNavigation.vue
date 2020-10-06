<template>
  <div
      @mouseover="isInMenu = true"
      @mouseleave="isInMenu = false"
  >
    <v-navigation-drawer 
      mini-variant 
      app
      dark
      expand-on-hover
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
      </v-list-item>
      <v-divider></v-divider>
      <v-list nav class="pa-0">
        <v-list-item-group v-model="menuSelection">
          <!-- Generate Menu -->
          <v-list-item 
            class="px-2 ma-0"
            v-for="menuItem in menuItems"
            :key="menuItem.title"
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
          :class="buttonVisibility" 
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
    isInMenu: false,
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

    buttonVisibility() {
      return this.isInMenu ? 'visible' : '';
    }
  }
}
</script>

<style scoped>
.button {
  opacity: 0;
  transition: opacity 0.1s;
}

.visible {
  opacity: 1;
}
</style>