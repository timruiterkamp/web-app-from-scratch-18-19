import { getTeam } from "../requests/getTeam";
import { renderGalleryItem } from "../requests/getImages";
import Component from "../lib/component";

export default class TeamOverview extends Component {
  constructor() {
    super();
  }

  async render() {
    this.clean()
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
    await getTeam();
    await renderGalleryItem();
  }
}
