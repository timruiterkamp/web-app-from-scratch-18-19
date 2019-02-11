import { getData } from "./ApiCall";
import { StandingTable } from "../utils/nodeGeneration";

export const getStanding = () => {
  const standingData = getData(
    "https://api.football-data.org/v2/competitions/2021/standings"
  );
  standingData.then(data => {
    const standingsContainer = document.querySelector(".standings");
    const competition = data.standings[0];
    StandingTable(standingsContainer, competition);
  });
};
