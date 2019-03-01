import GetData from "./requests/ApiCall";
import eventHandler from "./utils/eventHandler";
import Store from "./store/index";

export const init = async () => {
  const competition = {
    key: 2021,
    name: "PL"
  };
  const apiURL =
    "https://cors-anywhere.herokuapp.com/https://api.football-data.org/v2";
  const calls = {
    standing: `${apiURL}/competitions/${competition.key}/standings`,
    competition: `${apiURL}/competitions/${
      competition.name
    }/matches?status=SCHEDULED`,
    allCompetitions: `${apiURL}/competitions/`,
    teams: `${apiURL}/competitions/${competition.key}/teams`
  };

  if (!localStorage.competition && localStorage.competition === undefined) {
    const get = new GetData();
    const event = new eventHandler();
    event.loading();

    await get.competition(calls.competition);
    await get.allCompetitions(calls.allCompetitions);
    await get.competitionStanding(calls.standing);
    await get.competitionTeams(calls.teams);

    Store.dispatch("setLoading", false);
    window.location.reload(); // should be addded to a store watcher
  }
  Store.dispatch("setLoading", false);
};
