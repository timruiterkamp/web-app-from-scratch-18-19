import { getData } from "./ApiCall";

export const getStanding = () => {
  const standingData = getData(
    "https://api.football-data.org/v2/competitions/2021/standings"
  );
  standingData.then(data => {
    const standingsContainer = document.querySelector(".standings");
    standingsContainer.innerHTML += data.standings[0].table
      .map(tableStanding => {
        return `
            <tr>
            <td>${tableStanding.position}</td>
            <td><a href="/team/${tableStanding.team.id}">${
          tableStanding.team.name
        }</a></td>
            <td>${tableStanding.points}</td><td>${tableStanding.won}</td>
            <td>${tableStanding.draw}</td><td>${tableStanding.lost}</td>
            <td>${tableStanding.goalsFor}</td><td>${
          tableStanding.goalsAgainst
        }</td>
            <td>${tableStanding.goalDifference}</td></tr>`;
      })
      .join("");
  });
};
