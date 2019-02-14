export default {
  setCompetition(context, payload) {
    context.commit("setCompetition", payload);
  },
  setStanding(context, payload) {
    context.commit("setStanding", payload);
  },
  setCurrentTeam(context, payload) {
    context.commit("setCurrentTeam", payload);
  },
  setTeams(context, payload) {
    context.commit("setTeams", payload);
  }
};
