import { cssMediaQueries } from "./src/utils/mediaqueries.js";

let jsMediaQueries = {};

// not ideal, find some better way to do this.
exports.onRouteUpdate = function() {
  if (window) {
    // console.log(window);
    for (let breakpt in cssMediaQueries) {
      jsMediaQueries[breakpt] = window.matchMedia(
        cssMediaQueries[breakpt].match(/and(.*)/)[1],
      ).matches;
    }
  }
};

export { jsMediaQueries };
