import { getTeam } from "../data/getTeam";

export const TeamOverview = {
  render: async () => {
    let view = `
      <section class="team-overview">
      </section>
      `;
    return view;
  },
  after_render: async () => {
    getTeam();
  }
};
