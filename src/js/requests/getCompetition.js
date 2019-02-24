import { parseDate } from "../utils/dateParsing";
import { CompetitionTable, nextMatch } from "../utils/nodeGeneration";
import Store from "../store/index";

export const generateCompetitionList = () => {
  const competitionData = localStorage.competition
    ? JSON.parse(localStorage.competition)
    : Store.state.competition;
  console.log(competitionData);
  const scheduleContainer = document.querySelector(".schedule");

  competitionData.matches.map(async match => {
    const homeObject = {
      className: "homeTeam",
      id: match.homeTeam.id,
      name: match.homeTeam.name
    };

    const awayObject = {
      className: "awayTeam",
      id: match.awayTeam.id,
      name: match.awayTeam.name
    };

    await CompetitionTable(
      scheduleContainer,
      [homeObject, awayObject],
      parseDate(match.utcDate)
    );
  });

  const generateUpcomingMatch = () => {
    const upcomingContainer = document.querySelector(".teams");

    const match = {
      teams: [
        {
          id: competitionData.matches[0].homeTeam.id,
          name: competitionData.matches[0].homeTeam.name
        },
        {
          id: competitionData.matches[0].awayTeam.id,
          name: competitionData.matches[0].awayTeam.name
        }
      ],
      date: parseDate(competitionData.matches[0].utcDate)
    };
    return nextMatch(upcomingContainer, match);
  };

  generateUpcomingMatch();
};
