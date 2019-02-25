import Component from "../lib/component";

export default class Generate extends Component {
  constructor() {
    super();
    this.w = this.dom.write;
  }

  async CompetitionTable(appendParent, rows, date) {
    const w = this.w;
    const content = w(
      "tr",
      {},
      ...rows.map(team =>
        w("td", {}, w("a", { href: `/#/team/${team.id}` }, team.name))
      ),
      w("p", {}, date)
    );
    appendParent.appendChild(this.dom.create(content));
  }

  nextMatch(appendParent, match) {
    const w = this.w;
    const content = w(
      "ul",
      {},
      w("li", {}, match.date),
      w(
        "li",
        {},
        ...match.teams.map(team =>
          w("li", {}, w("a", { href: `/#/team/${team.id}` }, team.name))
        )
      )
    );

    appendParent.appendChild(this.dom.create(content));
  }

  standingTable(appendParent, data) {
    if (!appendParent) {
      console.log("geen parent");
    }
    data.standings[0].table.map(async team => {
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
          points: {
            link: false,
            key: team.points
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

      const w = this.w;
      const content = w(
        "tr",
        {},
        ...teamObject.map(stat => {
          console.log(stat);
          const keys = Object.keys(stat);
          const options = stat[keys];

          return w(
            "td",
            {},
            options.link
              ? w(
                  "a",
                  { href: `/#/team/${options.url}` },
                  options.key.toString()
                )
              : w("p", {}, options.key.toString())
          );
        })
      );
      console.log(content);

      appendParent.appendChild(this.dom.create(content));
    });
  }
}
