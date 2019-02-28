import GetData from "./requests/ApiCall";

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
    await get.competitionStanding(calls.standing);
    await get.competition(calls.competition);
    await get.competitionTeams(calls.teams);
    await get.allCompetitions(calls.allCompetitions);
  }
};
