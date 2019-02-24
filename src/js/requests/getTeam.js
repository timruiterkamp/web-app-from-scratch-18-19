import Store from "../store/index";

export const getTeam = () => {
  const id = Store.state.currentTeam;
  const teams = localStorage.teams
    ? JSON.parse(localStorage.teams)
    : Store.state.team.teams;
  const team = teams.teams.find(team => team.id === Number(id));
  const section = document.querySelector(".team-overview");

  console.log(team);

  // will be refactored to node generator
  const image = document.createElement("img");
  const title = document.createElement("h1");
  const address = document.createElement("p");
  const venue = document.createElement("p");
  const founded = document.createElement("p");
  const email = document.createElement("p");
  const clubColors = document.createElement("p");

  image.src = team.crestUrl;
  title.textContent = team.name;
  address.textContent = team.address;
  venue.textContent = team.venue;
  founded.textContent = team.founded;
  email.textContent = team.email;
  clubColors.textContent = team.clubColors;

  section.appendChild(image);
  section.appendChild(title);
  section.appendChild(address);
  section.appendChild(venue);
  section.appendChild(founded);
  section.appendChild(email);
  section.appendChild(clubColors);
};
