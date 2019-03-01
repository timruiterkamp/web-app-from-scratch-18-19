import Component from "../lib/component";
import { Requests } from "../requests/requests";
import eventHandler from "../utils/eventHandler";
import Store from "../store/index";

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
          w("section", { class: "headerImage" }),
          w("h1", {}, "Premiere league"),
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
    const events = new eventHandler();
    if (!Store.state.loading || localStorage.getItem("loading") === true) {
      const get = new Requests();
      await get.standing();
      await get.upcomingMatch();
      await get.competitionList();
      await get.galleryItem();
      await get.allCompetitions();
    } else if (Store.state.loading) {
      events.loading();
    }
  }
}
