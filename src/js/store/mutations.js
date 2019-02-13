export default {
  setCompetition(state, payload) {
    state.competition = payload;
    return state;
  },
  setStanding(state, payload) {
    state.standing = payload;
    return state;
  }
};
