import { getData } from "./ApiCall";
import { parseDate, parseTime } from "../utils/dateParsing";
import { CompetitionTable, nextMatch } from "../utils/nodeGeneration";

export const generateCompetitionList = () => {
  const competitionData = getData(
    "https://api.football-data.org/v2/competitions/PL/matches?status=SCHEDULED"
  );
  const scheduleContainer = document.querySelector(".schedule");
  const upcomingContainer = document.querySelector(".teams");

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
    const match = {
      teams: [
        {
          homeID: data.matches[0].homeTeam.id,
          homeName: data.matches[0].homeTeam.name
        },
        {
          awayID: data.matches[0].awayTeam.id,
          awayName: data.matches[0].awayTeam.name
        }
      ],
      date: data.matches[0].utcDate
    };
    return nextMatch(match);
  });
};
