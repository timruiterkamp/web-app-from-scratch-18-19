import Store from "../store/index";
import Generate from "../utils/generate";
import { parseDate } from "../utils/dateParsing";
import Component from "../lib/component";

export class Requests extends Component {
  constructor() {
    super();
    this.generate = new Generate();
    this.w = this.dom.write;
  }

  team() {
    const id = Store.state.currentTeam;
    const teams = localStorage.teams
      ? JSON.parse(localStorage.teams)
      : Store.state.teams;
    console.log(Store.state.standing);

    const standing = localStorage.standing
      ? JSON.parse(localStorage.standing).standings[0].table
      : Store.state.standing.standings[0].table;

    const team = teams.teams.find(team => team.id === Number(id));
    const teamStanding = standing.find(
      pos => pos.team.name === team.name.toString()
    );

    console.log(teamStanding);

    const section = document.querySelector(".team-overview");

    const w = this.w;
    const content = w(
      "div",
      { class: "wrapper" },
      w(
        "div",
        { class: "information" },
        w("h1", {}, team.name),
        w("p", {}, team.name),
        w("p", {}, team.address),
        w("p", {}, team.founded.toString()),
        w("p", {}, team.email ? team.email : ""),
        w("p", {}, team.clubColors)
      ),
      w(
        "div",
        { class: "standing" },
        w("p", {}, `Position: ${teamStanding.position}`),
        w("p", {}, `Points: ${teamStanding.points}`),
        w("p", {}, `Played games: ${teamStanding.playedGames}`),
        w("p", {}, `Won: ${teamStanding.won}`),
        w("p", {}, `Draw: ${teamStanding.draw}`),
        w("p", {}, `Lost: ${teamStanding.lost}`),
        w("p", {}, `Goals made: ${teamStanding.goalsFor}`),
        w("p", {}, `Goals against: ${teamStanding.goalsAgainst}`),
        w("p", {}, `Goal difference: ${teamStanding.goalDifference}`)
      )
    );
    section.appendChild(this.dom.create(content));
  }

  standing() {
    const standing = localStorage.standing
      ? JSON.parse(localStorage.standing)
      : Store.state.standing;
    const container = document.querySelector(".standings");
    this.generate.standingTable(container, standing);
  }

  competitionList() {
    const data = localStorage.competition
      ? JSON.parse(localStorage.competition)
      : Store.state.competition;
    const container = document.querySelector(".schedule");

    console.log(data);
    data.matches
      .filter(match => match.matchday === parseInt(29))
      .map(async match => {
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

        await this.generate.CompetitionTable(
          container,
          [homeObject, awayObject],
          parseDate(match.utcDate)
        );
      });
  }

  allCompetitions() {
    const data = localStorage.allCompetitions
      ? JSON.parse(localStorage.allCompetition)
      : Store.state.allCompetitions;

    const container = document.querySelector(".competition-selection");
    console.log(data);
  }

  upcomingMatch() {
    const data = localStorage.competition
      ? JSON.parse(localStorage.competition)
      : Store.state.competition;
    const container = document.querySelector(".teams");

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
    return this.generate.nextMatch(container, match);
  }

  galleryItem(randomNumber) {
    const numItemsToGenerate = 0;
    const numImagesAvailable = 10;
    const imageWidth = 1920; //your desired image width in pixels
    const imageHeight = 400;
    const collectionID = 1193466; //the collection ID from the original url

    fetch(
      `https://source.unsplash.com/collection/${collectionID}/${imageWidth}x${imageHeight}/?sig=${randomNumber}`
    ).then(response => {
      const headerContainer = document.querySelector(".headerImage");

      const image = this.w("img", {
        src: response.url,
        class: "gallery-image",
        alt: "gallery image"
      });

      headerContainer.appendChild(this.dom.create(image));
    });
    for (let i = 0; i < numItemsToGenerate; i++) {
      let randomImageIndex = Math.floor(Math.random() * numImagesAvailable);
      renderGalleryItem(randomImageIndex);
    }
  }
}
