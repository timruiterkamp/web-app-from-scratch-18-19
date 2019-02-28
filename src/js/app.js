import "@babel/polyfill";
import { initRouter } from "./router";
import { init as initStore } from "./init";

initStore();
initRouter();
