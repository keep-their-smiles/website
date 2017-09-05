import Link from "gatsby-link";
import Helmet from "react-helmet";
import { rhythm as r } from "../utils/typography";
import g from "glamorous";
import { jsMediaQueries as jm } from "../../gatsby-browser";
import { navColorAnimeObj } from "../utils/css-animes";
import { css } from "glamor";

let LinkS = g(Link)({
  // background: "black",
  padding: `${r(0.7)} ${r(1.5)}`,
  font: `bold ${r(0.9)} Anton, sans-serif`,
  color: "#fff",
  ":hover": {
    background: "rgba(208, 205, 215, 0.3)",
    // color: "#47a098",
  },
});

let NavS = g.nav({
  display: "flex",
  justifyContent: "space-evenly",
});

const Nav = ({ data }) => {
  let titles = data.map(post => {
    const {
      id,
      frontmatter: { title = "default" },
      fields: { slug = "default" },
    } = post.node;

    if (slug !== "/home/") {
      return (
        <LinkS key={post.node.id} to={slug}>
          {title}
        </LinkS>
      );
    }
  });

  let nav;

  if (jm.smallnt) {
    nav = titles;
  } else {
    nav = null;
  }

  return (
    <NavS className="nav-wrapper">
      {nav}
      <LinkS to="/">Home</LinkS>
    </NavS>
  );
};

export default Nav;
