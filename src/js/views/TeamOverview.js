import { getTeam } from "../requests/getTeam";
import { renderGalleryItem } from "../requests/getImages";

export const TeamOverview = {
  render: async () => {
    let view = `
      <section class="headerImage">
      </section>
      <section class="team-overview">
      </section>
      <a href="/">Go back</a>

      `;
    return view;
  },
  after_render: async () => {
    getTeam();
    renderGalleryItem();
  }
};
