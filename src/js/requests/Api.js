import Store from "../store/index.js";
import eventHandler from "../utils/eventHandler.js";
require("dotenv").config();

class ApiCall {
  constructor() {
    this.apiKey = process.env.FOOTBALL_API_KEY;
  }

  fetcher(url) {
    try {
      return fetch(url, {
        headers: { "X-Auth-Token": this.apiKey }
      })
        .then(data => data.json())
        .catch(err => {
          const event = new eventHandler();
          event.error(err.status, err.message);
        });
    } catch {
      const event = new eventHandler();
      event.error("503", "data kon niet worden opgehaald, teveel api requests");
    }
  }
}

export default class GetData extends ApiCall {
  async competition(url) {
    const data = await super.fetcher(url);
    Store.dispatch("setCompetition", data);
  }

  async competitionStanding(url) {
    const data = await super.fetcher(url);
    Store.dispatch("setStanding", data);
  }

  async competitionTeams(url) {
    const data = await super.fetcher(url);
    Store.dispatch("setTeams", data);
  }

  async allCompetitions(url) {
    const data = await super.fetcher(url);
    Store.dispatch("setAllCompetitions", data);
  }
}
