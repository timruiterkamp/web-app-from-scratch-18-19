export const CompetitionTable = (appendParent, rows, date) => {
  const TR = document.createElement("tr");
  const matchDate = document.createElement("td");

  rows.forEach(team => {
    const TD = document.createElement("td");
    const Anchor = document.createElement("a");

    TD.classList.add(team.className);

    Anchor.setAttribute("href", `/#/team/${team.id}`);
    Anchor.textContent = `${team.name}`;

    TD.appendChild(Anchor);
    TR.appendChild(TD);
  });

  matchDate.textContent = date;
  TR.appendChild(matchDate);
  appendParent.appendChild(TR);
};

export const nextMatch = (appendParent, match) => {
  const date = document.createElement("li");
  date.textContent = match.date;
  appendParent.appendChild(date);

  match.teams.forEach(team => {
    const teamContainer = document.createElement("li");
    const Anchor = document.createElement("a");
    Anchor.setAttribute("href", `/#/team/${team.id}`);
    Anchor.textContent = `${team.name}`;
    teamContainer.appendChild(Anchor);
    appendParent.appendChild(teamContainer);
  });
};

export const StandingTable = (appendParent, data) => {
  data.table.forEach(team => {
    const TR = document.createElement("tr");

    const teamObject = [
      {
        pos: {
          link: false,
          key: team.position
        }
      },
      {
        team: {
          link: true,
          key: team.team.name,
          url: team.team.id
        }
      },
      {
        position: {
          link: false,
          key: team.position
        }
      },
      {
        wins: {
          link: false,
          key: team.won
        }
      },
      {
        draws: {
          link: false,
          key: team.draw
        }
      },
      {
        loses: {
          link: false,
          key: team.lost
        }
      },
      {
        goalsFor: {
          link: false,
          key: team.goalsFor
        }
      },
      {
        goalsAgainst: {
          link: false,
          key: team.goalsAgainst
        }
      },
      {
        goalDiff: {
          link: false,
          key: team.goalDifference
        }
      }
    ];
    createNodesForStanding(TR, teamObject);

    appendParent.appendChild(TR);
  });
};

function createNodesForStanding(row, data) {
  data.forEach(stat => {
    const keys = Object.keys(stat);
    const options = stat[keys];

    const TD = document.createElement("td");

    if (options.link) {
      const Anchor = document.createElement("a");
      Anchor.setAttribute("href", `/#/team/${options.url}`);
      Anchor.textContent = `${options.key}`;
      TD.appendChild(Anchor);
    } else {
      TD.textContent = options.key;
    }
    row.appendChild(TD);
  });
}
