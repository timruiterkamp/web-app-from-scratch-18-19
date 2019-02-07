import { Home } from "./views/HomePage";
import { TeamOverview } from "./views/TeamOverview";
// Source used: https://dev.to/rishavs/making-a-single-page-app-in-ye-good-olde-js-es6-3eng
export const RouterBase = () => {
  const routes = {
    "/team/:id": TeamOverview,
    "/": Home
  };

  const parseRequestURL = () => {
    let url = location.hash.slice(1).toLowerCase() || "/";
    let r = url.split("/");
    let request = {
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
    const content = null || document.querySelector("main");
    content.innerHTML = "";

    let request = parseRequestURL();

    let parsedURL =
      (request.resource ? "/" + request.resource : "/") +
      (request.id ? "/:id" : "") +
      (request.verb ? "/" + request.verb : "");

    let page = routes[parsedURL] ? routes[parsedURL] : console.log("error");
    content.innerHTML = await page.render();
    await page.after_render();
  };

  window.addEventListener("hashchange", router);
  window.addEventListener("load", router);
};
