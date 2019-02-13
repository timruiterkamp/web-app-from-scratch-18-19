export default {
  setCompetition(context, payload) {
    context.commit("setCompetition", payload);
  },
  setStanding(context, payload) {
    context.commit("setStanding", payload);
  }
};
