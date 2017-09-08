import g from "glamorous";
import { rhythm as r } from "../utils/typography";
import { css } from "glamor";
import { cssMediaQueries } from "../utils/mediaqueries";
import { jsMediaQueries as jm } from "../../gatsby-browser";
import backgroundImg from "../images/edited/DSC_0126.jpg";

const SDIVCont = g.div(
  {
    background: `url(${backgroundImg}) no-repeat 50% 50%`,
    flex: 1,
    padding: `${r(1)}`,
    width: "100%",
    textAlign: "center",
    zIndex: "1",
    "> h1, h2": {
      fontFamily: "Anton, sans-serif",
      fontWeight: `bold`,
    },
    "> h1": {
      fontSize: `${r(2)}`,
      padding: `${r(1.5)} 0 ${r(0.5)}`,
    },
    "> h2": {
      fontSize: `${r(1.5)}`,
    },

    [cssMediaQueries.smallnt]: {
      top: `${r(2.6)}`,
      "> h1": {
        fontSize: `${r(2.4)}`,
        padding: `${r(0.5)} 0 ${r(0.5)}`,
      },
      position: "absolute",
      height: "auto",
    },
  },
  ({ isHome }) => {
    if (isHome) {
      return {
        background: jm.smallnt
          ? `rgba(208, 205, 215, 0.6)`
          : `rgba(34, 176, 214, 0.3)`,
        animation: `${css.keyframes({
          "0%": { background: `rgba(34, 176, 214, 0.3)` },
          "100%": {
            background: jm.smallnt
              ? `rgba(208, 205, 215, 0.6)`
              : `rgba(34, 176, 214, 0.3)`,
          },
        })} 7s ease-in`,
        "> h1, h2": {
          animation: `${css.keyframes({
            "0%": { color: `#fff` },
            "100%": { color: `000` },
          })} 7s ease-in`,
        },
      };
    } else {
      return {
        "> h1, h2": {
          color: "#fff",
        },
      };
    }
  },
);

export default props => {
  const { title, subtitle } = props;
  return (
    <SDIVCont isHome={props.isHome}>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </SDIVCont>
  );
};
