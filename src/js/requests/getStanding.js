import { getData } from "./ApiCall";
import { StandingTable } from "../utils/nodeGeneration";
import Store from "../store/index";

export const getStanding = () => {
  const standing = localStorage.standing
    ? JSON.parse(localStorage.standing)
    : Store.state.standing;
  const standingsContainer = document.querySelector(".standings");
  console.log(standingsContainer);
  console.log(Store.state);
  StandingTable(standingsContainer, standing);
};
