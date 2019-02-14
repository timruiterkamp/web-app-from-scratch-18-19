import { Home } from "./views/HomePage";
import { TeamOverview } from "./views/TeamOverview";
import Store from "./store/index";

// Source used: https://dev.to/rishavs/making-a-single-page-app-in-ye-good-olde-js-es6-3eng
export const routerBase = () => {
  const routes = {
    "/#/team/:id": TeamOverview,
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
    const dataLayerCheck = document.querySelector(".datalayer");
    let dataLayer;

    if (dataLayerCheck) {
      dataLayerCheck.remove();
      dataLayer = document.createElement("section");
    } else {
      dataLayer = document.createElement("section");
    }

    dataLayer.classList.add("datalayer");
    const request = parseRequestURL();

    const parsedURL =
      (request.resource ? "/#/" + request.resource : "/") +
      (request.id ? "/:id" : "") +
      (request.verb ? "/" + request.verb : "");

    Store.dispatch("setCurrentTeam", request.id);

    if (routes[parsedURL]) {
      const page = routes[parsedURL];
      const template = await page.render();
      dataLayer.insertAdjacentHTML("afterbegin", template);
      content.appendChild(dataLayer);
      await page.after_render();
    } else {
      console.error("doet het niet", routes[parsedURL]);
    }
  };

  window.addEventListener("hashchange", router);
  window.addEventListener("load", router);
};
