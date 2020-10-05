<template>
  <div class="container">
    <div class="innerContainer mt-16">
      <h1 class="text-h2 text-sm-h1"><span class="font-weight-regular">time</span><span class="font-weight-thin">clocke</span></h1>
      <v-sheet elevation="7" rounded="lg" class="mt-5 pa-5 login-form">
        <v-form >
          <v-text-field
            v-model="userName"
            label="userName"
            prepend-icon="mdi-account"
            required 
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="password"
            prepend-icon="mdi-lock"
            required 
          ></v-text-field>
        </v-form>
        <div class="text-right">
          <v-btn color="primary" @click.prevent="login">Login</v-btn>
        </div>
      </v-sheet>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from 'vuex';

export default {
  data: () => ({
    userName: '',
    password: ''
  }),

  methods: {
    ...mapActions(['login'])
  }
}
</script>

<style scoped>
.container {
  text-align: center;
  height: 100%;
}
.login-form {
  max-width: 400px;
  margin: auto;
}
</style>