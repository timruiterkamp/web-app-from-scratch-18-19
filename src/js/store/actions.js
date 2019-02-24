export default {
  setCompetition(context, payload) {
    localStorage.setItem("competition", JSON.stringify(payload));
    context.commit("setCompetition", payload);
  },
  setStanding(context, payload) {
    localStorage.setItem("standing", JSON.stringify(payload));
    context.commit("setStanding", payload);
  },
  setCurrentTeam(context, payload) {
    localStorage.setItem("currentTeam", JSON.stringify(payload));
    context.commit("setCurrentTeam", payload);
  },
  setTeams(context, payload) {
    localStorage.setItem("teams", JSON.stringify(payload));
    context.commit("setTeams", payload);
  },
  setAllCompetitions(context, payload) {
    localStorage.setItem("competitions", JSON.stringify(payload));
    context.commit("setAllCompetitions", payload);
  }
};
