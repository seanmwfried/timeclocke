export default {
  state: {
    isClockedIn: false,
    isOnLunch: false,
    isOnBreak: false,
    timepunches: [
      { punchType: 'Clock In', date: '2020-10-07T17:39:06.521Z' },
      { punchType: 'Clock Out', date: '2020-10-07T18:39:06.521Z' },
      { punchType: 'Clock In', date: '2020-10-06T17:39:06.521Z' },
      { punchType: 'Clock Out', date: '2020-10-06T18:39:06.521Z' },
      { punchType: 'Clock In', date: '2020-10-05T17:39:06.521Z' },
      { punchType: 'Clock Out', date: '2020-10-05T18:39:06.521Z' },
      { punchType: 'Clock In', date: '2020-10-01T18:39:06.521Z' },
      { punchType: 'Clock Out', date: '2020-10-01T18:39:06.521Z' },
    ],
  },

  getters: {
    isClockedIn: state => state.isClockedIn,
    isOnLunch: state => state.isOnLunch,
    isOnBreak: state => state.isOnBreak,
    timepunches: state => state.timepunches
  },

  mutations: {
    setIsClockedIn(state, newValue) { state.isClockedIn = newValue; },    
    setIsOnLunch(state, newValue) { state.isOnLunch = newValue; },
    setIsOnBreak(state, newValue) { state.isOnBreak = newValue; },
    addTimePunch(state, payload) {
      state.timepunches.push({ punchType: payload.punchType, date: payload.date });
    }
  },

  actions: {
    clockIn(context) { context.commit('setIsClockedIn', true); },
    clockOut(context) { context.commit('setIsClockedIn', false); },

    startLunch(context) { context.commit('setIsOnLunch', true); },
    endLunch(context) { context.commit('setIsOnLunch', false); },

    startBreak(context) { context.commit('setIsOnBreak', true); },
    endBreak(context) { context.commit('setIsOnBreak', false); },

    addTimePunch(context, payload) { context.commit('addTimePunch', payload)},
  }
}