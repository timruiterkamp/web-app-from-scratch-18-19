import { getData } from "./ApiCall";
import { parseDate, parseTime } from "../utils/dateParsing";

export const generateCompetitionList = () => {
  const competitionData = getData(
    "https://api.football-data.org/v2/competitions/PL/matches?status=SCHEDULED"
  );
  const scheduleContainer = document.querySelector(".schedule");
  const upcomingContainer = document.querySelector(".teams");

  competitionData.then(data => {
    scheduleContainer.innerHTML += data.matches
      .map(match => {
        return `
        <tr>
        <td class="homeTeam"><a href="/team/${match.homeTeam.id}">${
          match.homeTeam.name
        }</a></td>
        <td class="awayTeam"> <a href="/team/${match.awayTeam.id}">${
          match.awayTeam.name
        }</a></td>
        <td class="playData"><time>${parseDate(match.utcDate)}</time></td>
        </tr>`;
      })
      .join("");
  });

  competitionData.then(data => {
    return (upcomingContainer.innerHTML += `<li><a href="/team/${
      data.matches[0].homeTeam.id
    }">${data.matches[0].homeTeam.name}</a></li> - <li><a href="/team/${
      data.matches[0].awayTeam.id
    }">${data.matches[0].awayTeam.name}</a></li><li><time>${parseDate(
      data.matches[0].utcDate
    )}</time></li>`);
  });
};
