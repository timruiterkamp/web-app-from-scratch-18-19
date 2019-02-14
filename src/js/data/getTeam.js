import Store from "../store/index";

export const getTeam = () => {
  const id = Store.state.currentTeam;
  const teams = Store.state.team.teams;
  const team = teams.find(team => team.id === Number(id));
  const section = document.querySelector(".team-overview");
  const title = document.createElement("h1");
  title.textContent = team.name;
  section.appendChild(title);
};
