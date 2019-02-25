import { StandingTable } from "../utils/nodeGeneration";
import Store from "../store/index";

export const getStanding = () => {
  const standing = localStorage.standing
    ? JSON.parse(localStorage.standing)
    : Store.state.standing;
  const standingsContainer = document.querySelector(".standings");
  StandingTable(standingsContainer, standing);
};
