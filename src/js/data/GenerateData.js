"use strict";

function initializeProject() {
  initializeCompetition(
    "https://api.football-data.org/v2/competitions/PL/matches?status=SCHEDULED"
  );
  initializeStandings(
    "https://api.football-data.org/v2/competitions/2021/standings"
  );
}

function initializeCompetition(url) {
  fetch(url, {
    headers: { "X-Auth-Token": "f3ee45887fd14bcbb91b085778f99e30" }
  })
    .then(data => generateCompetitionList(data.json()))
    .catch(err => console.error(err));
}

function initializeStandings(url) {
  fetch(url, {
    headers: { "X-Auth-Token": "f3ee45887fd14bcbb91b085778f99e30" }
  })
    .then(data => generateStandingList(data.json()))
    .catch(err => console.error(err));
}

function generateCompetitionList(data) {
  const scheduleContainer = document.querySelector(".schedule");
  data.then(
    competitions =>
      (scheduleContainer.innerHTML += competitions.matches
        .map(match => {
          return `
    
        <tr>
        <td class="homeTeam"><a href="${match.homeTeam.id}">${
            match.homeTeam.name
          }</a></td>
        <td class="awayTeam"> <a href="${match.awayTeam.id}">${
            match.awayTeam.name
          }</a></td>
        <td class="playData"><time>${parseDate(match.utcDate)}</time></td>
        </tr>`;
        })
        .join(""))
  );
}

function generateStandingList(data) {
  const standingsContainer = document.querySelector(".standings");
  data.then(
    standing =>
      (standingsContainer.innerHTML += standing.standings[0].table
        .map(tableStanding => {
          console.log(tableStanding);
          return `
          <tr>
          <td>${tableStanding.position}</td>
          <td><a href="${tableStanding.team.id}">${
            tableStanding.team.name
          }</a></td>
          <td>${tableStanding.points}</td><td>${tableStanding.won}</td>
          <td>${tableStanding.draw}</td><td>${tableStanding.lost}</td>
          <td>${tableStanding.goalsFor}</td><td>${
            tableStanding.goalsAgainst
          }</td>
          <td>${tableStanding.goalDifference}</td></tr>`;
        })
        .join(""))
  );
}

function parseDate(date) {
  const currDate = new Date(date);
  const day = currDate.getDate();
  const month = currDate.getMonth() + 1;
  const year = currDate.getFullYear();
  return `${day} - ${month} - ${year}`;
}

document.addEventListener("DOMContentLoaded", initializeProject);
