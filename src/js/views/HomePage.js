import { getStanding } from "../requests/getStanding";
import { generateCompetitionList } from "../requests/getCompetition";
import { renderGalleryItem } from "../requests/getImages";
import { init } from "../init";
import Component from "../lib/component";
import { Requests } from "../requests/requests";

export default class Home extends Component {
  constructor() {
    super();
  }

  async render() {
    this.clean();

    const w = this.dom.write;

    this.app.appendChild(
      this.dom.create(
        w(
          "section",
          { class: "holder" },
          w("h1", {}, "Premiere league schedule"),
          w("section", { class: "headerImage" }),
          w("section", { class: "competition-selection" }),
          w(
            "section",
            { class: "upcoming-match" },
            w("h2", {}, "Upcoming match:"),
            w("div", { class: "teams" })
          ),
          w(
            "section",
            { class: "content" },
            w(
              "div",
              { class: "left-section" },
              w(
                "table",
                {},
                w(
                  "thead",
                  {},
                  w(
                    "tr",
                    {},
                    w("th", {}, "position"),
                    w("th", {}, "Team"),
                    w("th", {}, "Points"),
                    w("th", {}, "wins"),
                    w("th", {}, "Draws"),
                    w("th", {}, "Loses"),
                    w("th", {}, "Goals made"),
                    w("th", {}, "Goals for"),
                    w("th", {}, "Goals Against")
                  )
                ),
                w("tbody", { class: "standings" })
              ),
              w("table", { class: "topscorer" })
            ),
            w(
              "div",
              { class: "right-section" },
              w(
                "table",
                {},
                w(
                  "thead",
                  {},

                  w("th", { class: "homeTeam" }, "Home team"),
                  w("th", { class: "awayTeam" }, "Away team"),
                  w("th", { class: "playData" }, "Date")
                ),
                w("tbody", { class: "schedule" })
              )
            )
          )
        )
      )
    );
  }

  async after_render() {
    await init();

    const get = new Requests();
    await get.standing();
    await get.upcomingMatch();
    await get.competitionList();
    await get.galleryItem();
  }
}
