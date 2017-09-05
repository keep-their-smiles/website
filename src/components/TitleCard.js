import g from "glamorous";
import { rhythm as r } from "../utils/typography";
import { css } from "glamor";
import { cssMediaQueries, jsMediaQueries as jm } from "../utils/mediaqueries";

const SDIVCont = g.div({
  flex: 1,
  padding: `${r(1)}`,
  width: "100%",
  background: jm.smallnt
    ? `rgba(208, 205, 215, 0.6)`
    : `rgba(34, 176, 214, 0.3)`,
  textAlign: "center",
  // height: "40%",
  // position: "relative",
  // top: `${r(-3)}`,
  zIndex: "1",
  // height: "100%",
  "> h1, h2": {
    color: "#000",
    fontFamily: "Anton, sans-serif",
    fontWeight: `bold`,
    animation: `${css.keyframes({
      "0%": { color: `#fff` },
      "100%": { color: `000` },
    })} 7s ease-in`,
  },
  "> h1": {
    fontSize: `${r(2)}`,
    padding: `${r(1.4)} 0 ${r(0.5)}`,
  },
  "> h2": {
    fontSize: `${r(1.5)}`,
  },
  animation: `${css.keyframes({
    "0%": { background: `rgba(34, 176, 214, 0.3)` },
    "100%": {
      background: jm.smallnt
        ? `rgba(208, 205, 215, 0.6)`
        : `rgba(34, 176, 214, 0.3)`,
    },
  })} 7s ease-in`,
  [cssMediaQueries.smallnt]: {
    top: `${r(2.6)}`,
    "> h1": {
      fontSize: `${r(2.4)}`,
      padding: `0 0 ${r(0.5)}`,
    },
    position: "absolute",
    height: "auto",
    // top: `${r(10.9)}`,
    // left: "50%",
    // transform: `translate(-50%)`,
  },
});

// const SDIVCont = g.div(bckgrndColAnimation);

console.log(SDIVCont.props);

export default props => {
  const { title, subtitle } = props;
  return (
    <SDIVCont>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </SDIVCont>
  );
};
