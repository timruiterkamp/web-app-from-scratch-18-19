export default {
  setCompetition(state, payload) {
    state.competition = payload;
    return state;
  },
  setStanding(state, payload) {
    state.standing = payload;
    return state;
  },
  setTeams(state, payload) {
    state.team = payload;
    return state;
  },
  setCurrentTeam(state, payload) {
    state.currentTeam = payload;
    return state;
  },
  setAllCompetitions(state, payload) {
    console.log(payload);
    state.allCompetitions = payload;
    return state;
  }
};
