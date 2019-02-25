import Store from "../store/index";
import Generate from "../utils/generate";
import { parseDate } from "../utils/dateParsing";
import Component from "../lib/component";

export class Requests extends Component {
  constructor() {
    super();
    this.get = new Generate();
    this.w = this.dom.write;
  }

  team() {
    const id = Store.state.currentTeam;
    const teams = localStorage.teams
      ? JSON.parse(localStorage.teams)
      : Store.state.team.teams;
    const team = teams.teams.find(team => team.id === Number(id));
    const section = document.querySelector(".team-overview");

    const w = this.w;

    console.log(team);
    const content = w(
      "div",
      { class: "wrapper" },
      w("h1", {}, team.name),
      w("p", {}, team.name),
      w("p", {}, team.address),
      w("p", {}, team.founded.toString()),
      w("p", {}, team.email ? team.email : ""),
      w("p", {}, team.clubColors)
    );
    section.appendChild(this.dom.create(content));
  }

  standing() {
    const standing = localStorage.standing
      ? JSON.parse(localStorage.standing)
      : Store.state.standing;
    const standingsContainer = document.querySelector(".standings");
    this.get.standingTable(standingsContainer, standing);
  }

  competitionList() {
    const competitionData = localStorage.competition
      ? JSON.parse(localStorage.competition)
      : Store.state.competition;
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

      await this.get.CompetitionTable(
        scheduleContainer,
        [homeObject, awayObject],
        parseDate(match.utcDate)
      );
    });
  }

  upcomingMatch() {
    const competitionData = localStorage.competition
      ? JSON.parse(localStorage.competition)
      : Store.state.competition;
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
    return this.get.nextMatch(upcomingContainer, match);
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
