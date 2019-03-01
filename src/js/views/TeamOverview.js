import Component from "../lib/component";
import { Requests } from "../requests/requests";
import Store from "../store/index.js";
import eventHandler from "../utils/eventHandler";

export default class TeamOverview extends Component {
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
          w(
            "section",
            { class: "team-overview" },
            w("a", { href: "/" }, "Go back")
          )
        )
      )
    );
  }

  async after_render() {
    const events = new eventHandler();
    if (!Store.state.loading || localStorage.getItem("loading") === true) {
      const get = new Requests();
      await get.galleryItem();
      await get.team();
    }
  }
}
