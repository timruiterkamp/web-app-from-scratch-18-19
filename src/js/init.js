import StoreData from "./requests/ApiCall";

export const init = async () => {
  const competition = {
    key: 2021,
    name: "PL"
  };
  const data = {
    standing: `https://api.football-data.org/v2/competitions/${
      competition.key
    }/standings`,
    competition: `https://api.football-data.org/v2/competitions/${
      competition.name
    }/matches?status=SCHEDULED`,
    allCompetitions: `https://api.football-data.org/v2/competitions/`,
    teams: `http://api.football-data.org/v2/competitions/${
      competition.key
    }/teams`
  };

  if (!localStorage.competition) {
    const dataStorage = new StoreData();
    await dataStorage.getCompetitionStanding(data.standing);
    await dataStorage.getCompetition(data.competition);
    await dataStorage.getCompetitionTeams(data.teams);
    await dataStorage.getAllCompetitions(data.allCompetitions);
  }
};
