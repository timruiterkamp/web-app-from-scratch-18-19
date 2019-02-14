import StoreData from "./data/ApiCall";

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
    teams: `http://api.football-data.org/v2/competitions/${
      competition.key
    }/teams`
  };
  const dataStorage = new StoreData();
  await dataStorage.getCompetitionStandingData(data.standing);
  await dataStorage.getCompetitionData(data.competition);
  await dataStorage.getCompetitionTeams(data.teams);
};
