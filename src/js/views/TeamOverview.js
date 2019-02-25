import Component from "../lib/component";
import { Requests } from "../requests/requests";

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
          w("section", { class: "team-overview" }),
          w("a", { href: "/" }, "Go back")
        )
      )
    );
  }

  async after_render() {
    const get = new Requests();
    await get.team();
    await get.galleryItem();
  }
}
