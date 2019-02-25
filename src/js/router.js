import Home from "./views/HomePage";
import TeamOverview from "./views/TeamOverview";
import Store from "./store/index";

// Source used: https://dev.to/rishavs/making-a-single-page-app-in-ye-good-olde-js-es6-3eng
export const initRouter = () => {
  const routes = {
    "/#/team/:id": new TeamOverview(),
    "/": new Home()
  };

  const parseRequestURL = () => {
    const url = location.hash.slice(1).toLowerCase() || "/";
    const r = url.split("/");
    const request = {
      resource: null,
      id: null,
      verb: null
    };
    request.resource = r[1];
    request.id = r[2];
    request.verb = r[3];
    return request;
  };

  const router = async () => {
    const request = parseRequestURL();

    const parsedURL =
      (request.resource ? "/#/" + request.resource : "/") +
      (request.id ? "/:id" : "") +
      (request.verb ? "/" + request.verb : "");

    Store.dispatch("setCurrentTeam", request.id);

    if (routes[parsedURL]) {
      const page = routes[parsedURL];
      console.log(page);
      await page.render();
      await page.after_render();
    } else {
      console.error("Page is undefined", routes[parsedURL]);
    }
  };

  window.addEventListener("hashchange", router);
  window.addEventListener("load", router);
};
