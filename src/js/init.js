import StoreData from "./data/ApiCall";

export const init = async () => {
  const data = {
    standing: "https://api.football-data.org/v2/competitions/2021/standings",
    competition:
      "https://api.football-data.org/v2/competitions/PL/matches?status=SCHEDULED"
  };
  const dataStorage = new StoreData();
  await dataStorage.getCompetitionStandingData(data.standing);
  await dataStorage.getCompetitionData(data.competition);
};
