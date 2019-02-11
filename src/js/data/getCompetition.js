import { getData } from "./ApiCall";
import { parseDate, parseTime } from "../utils/dateParsing";
import { CompetitionTable, nextMatch } from "../utils/nodeGeneration";

export const generateCompetitionList = () => {
  const competitionData = getData(
    "https://api.football-data.org/v2/competitions/PL/matches?status=SCHEDULED"
  );
  const scheduleContainer = document.querySelector(".schedule");

  competitionData.then(data => {
    data.matches.map(async match => {
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
  });

  competitionData.then(data => {
    const upcomingContainer = document.querySelector(".teams");

    const match = {
      teams: [
        {
          id: data.matches[0].homeTeam.id,
          name: data.matches[0].homeTeam.name
        },
        {
          id: data.matches[0].awayTeam.id,
          name: data.matches[0].awayTeam.name
        }
      ],
      date: parseDate(data.matches[0].utcDate)
    };
    return nextMatch(upcomingContainer, match);
  });
};
