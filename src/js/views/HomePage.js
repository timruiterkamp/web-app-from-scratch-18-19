import { getStanding } from "../data/getStanding";
import { generateCompetitionList, getNextMatch } from "../data/getCompetition";
import { renderGalleryItem } from "../data/getImages";
import { init } from "../init";

export const Home = {
  render: async () => {
    let view = `
      <h1>Premiere league schedule</h1>

      <section class="headerImage">
      </section>

      <section class="upcoming-match">
        <h2>Upcoming match:</h2>
        <ul class="teams"></ul>
      </section>

      <section class="content">
        <div class="left-section">
          <table>
            <thead>
              <tr>
                <th>Position</th>
                <th>Team</th>
                <th>Points</th>
                <th>Wins</th>
                <th>Draws</th>
                <th>Loses</th>
                <th>Goals made</th>
                <th>Goals against</th>
                <th>Goal difference</th>
              </tr>
            </thead>
            <tbody class="standings"></tbody>
          </table>
          <table class="topscorer"></table>
        </div>
        <div class="right-section">
          <table>
            <thead>
              <tr>
                <th class="homeTeam">Home team</th>
                <th class="awayTeam">Away team</th>
                <th class="playData">Date</th>
              </tr>
            </thead>
            <tbody class="schedule"></tbody>
          </table>
        </div>
        </section>
      
      `;
    return view;
  },
  after_render: async () => {
    await init();
    getStanding();
    generateCompetitionList();
    renderGalleryItem();
  }
};
