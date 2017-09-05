const cssMediaQueries = {
  iphoneR: `@media only screen and (min-width : 320px)`,
  esmall: ` @media only screen and (min-width : 480px)`,
  smallnt: `@media only screen and (min-width : 768px)`,
  medndesk: `@media only screen and (min-width : 992px)`,
  largenwide: `@media only screen and (min-width : 1200px)`,
};

let jsMediaQueries = {};

if (window) {
  for (let breakpt in cssMediaQueries) {
    jsMediaQueries[breakpt] = window.matchMedia(
      cssMediaQueries[breakpt].match(/and(.*)/)[1],
    ).matches;
  }
}

export { cssMediaQueries, jsMediaQueries };
