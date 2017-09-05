import Typography from "typography";

const options = {
  googleFonts: [
    {
      name: `Anton`,
      styles: [`400`, `400i`, `700`, `700i`],
    },
    {
      name: `Russo One`,
      styles: [`400`, `400i`, `700`, `700i`],
    },
    {
      name: `Rubic`,
      styles: [`400`, `400i`, `700`, `700i`],
    },
  ],
  baseFontSize: `18px`,
  baseLineHeight: 1.4,
  headerColor: `hsla(0,0%,0%,0.8)`,
  bodyColor: `hsla(0,0%,0%,0.7)`,
  blockMarginBottom: 0.75,
  headerFontFamily: [`Rubic`, `sans-serif`],
  bodyFontFamily: [`Raleway`, `sans-serif`],
  overrideStyles: () => {
    return {
      html: {
        overflowY: `scroll`,
      },
      h1: {
        lineHeight: 1.1,
      },
      a: {
        textDecoration: "none",
        color: `#44d9e7`,
      },
    };
  },
};

const typography = new Typography(options);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

module.exports = typography;
