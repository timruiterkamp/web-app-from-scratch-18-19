import { Home } from "./views/HomePage";
import { TeamOverview } from "./views/TeamOverview";
// Source used: https://dev.to/rishavs/making-a-single-page-app-in-ye-good-olde-js-es6-3eng
export const RouterBase = () => {
  const routes = {
    "/team/:id": TeamOverview,
    "/": Home
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
    const content = null || document.querySelector("main");
    const dataLayer = document.createElement("section");

    const request = parseRequestURL();

    const parsedURL =
      (request.resource ? "/" + request.resource : "/") +
      (request.id ? "/:id" : "") +
      (request.verb ? "/" + request.verb : "");

    if (routes[parsedURL]) {
      let page = routes[parsedURL];
      dataLayer.innerHTML = await page.render();
      content.appendChild(dataLayer);
      await page.after_render();
    } else {
      throw err;
    }
  };

  window.addEventListener("hashchange", router);
  window.addEventListener("load", router);
};
