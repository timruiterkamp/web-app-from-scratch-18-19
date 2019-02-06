export const Home = {
  render: async () => {
    let view = `
      <h1>Premiere league schedule</h1>
      <main class="content">
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
      </main>
      `;
    return view;
  },
  after_render: async () => {}
};
