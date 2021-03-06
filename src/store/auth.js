export default {
  state: {
    isLoggedIn: false,
    userName: ''
  },

  mutations: {
    setIsLoggedIn(state, payload) {
      if(payload.isLoggedIn == true){
        state.userName = payload.userName;
      }
      state.isLoggedIn = payload.isLoggedIn;
    },

    setUserName(state, userName) {
      state.userName = userName;
    }
  },

  actions: {
    login(context, userName) {
      context.commit('setIsLoggedIn', {
        isLoggedIn: true,
        userName: userName
      });
    },
  
    logout(context) {
      context.commit('setIsLoggedIn', {
        isLoggedIn: false
      });
    }
  },
  
  getters: {
    isLoggedIn: state => state.isLoggedIn,
    userName: state => state.userName
  }
}