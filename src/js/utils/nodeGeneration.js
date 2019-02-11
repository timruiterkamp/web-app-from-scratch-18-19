export const CompetitionTable = (appendParent, rows, date) => {
  const TR = document.createElement("tr");
  rows.forEach(team => {
    const TD = document.createElement("td");
    TD.classList.add(team.className);
    const Anchor = document.createElement("a");
    Anchor.setAttribute("href", `/team/${team.id}`);
    Anchor.textContent = `${team.name}`;
    TD.appendChild(Anchor);
    TR.appendChild(TD);
  });
  const matchDate = document.createElement("td");
  matchDate.textContent = date;
  TR.appendChild(matchDate);
  appendParent.appendChild(TR);
};

export const nextMatch = (match) => {
  const list = document.createElement('li');
  const Anchor = document.createElement("a");
  Anchor.setAttribute("href", `/team/${match.home}`);
  Anchor.textContent = `${team.name}`;


  <li><a href="/team/${
       data.matches[0].homeTeam.id
     }">${data.matches[0].homeTeam.name}</a></li> 
     - <li><a href="/team/${
       data.matches[0].awayTeam.id
    }">${data.matches[0].awayTeam.name}</a></li>
    
    <li><time>${parseDate(
      data.matches[0].utcDate
    )}</time></li>
}