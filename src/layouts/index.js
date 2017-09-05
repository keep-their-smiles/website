import React, { PureComponent } from "react";
import Link from "gatsby-link";
import Header from "../components/Header";
import { cssMediaQueries as cm } from "../utils/mediaqueries";
import { jsMediaQueries as jm } from "../../gatsby-browser";
import Burger from "../components/NavMobile";
import { Div } from "glamorous";
import Helmet from "react-helmet";
import TitleCard from "../components/TitleCard";
import g from "glamorous";
import { rhythm as r } from "../utils/typography";

const props = {
  title: `Mother Teresa Welfare Trust`,
  subtitle: `Doing Small Things With Great ❤️`,
};

const PageContainerDIV = g.div({}, ({ isHome }) => {
  if (!isHome) {
    return {
      width: "80%",
      margin: "0 auto",
      ".page-container div p": {
        textAlign: "left",
      },
      fontSize: `${r(0.8)}`,
      position: "absolute",
      top: `${r(14)}`,
      left: 0,
      right: 0,
      bottom: 0,
      textAlign: "center",
      [cm.smallnt]: {
        // position: "relative",
        top: `${r(12)}`,
        width: "60%",
        // textAlign: "center",
      },
    };
  }
});
import { rhythm, scale } from "../utils/typography";

class Wrapper extends PureComponent {
  render() {
    let data = this.props.data.allMarkdownRemark.edges;
    let ethsSProps = {
      background: `rgba(208, 205, 215, 0.6)`,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    };
    let conditionalHelmet, helmet;

    helmet = (
      <Helmet>
        <style type="text/css">
          {`
            .page-container p {
              margin-bottom: 0;
            }
          `}
        </style>
      </Helmet>
    );

    if (this.props.location.pathname === "/") {
      ethsSProps.height = `100vh`;
      ethsSProps.overflowY = `hidden`;
      conditionalHelmet = (
        <Helmet>
          <style type="text/css">
            {`
              ::-webkit-scrollbar {
                display: none;
              }

              body {
                background: "aqua"
              }
            `}
          </style>
        </Helmet>
      );
    }

    if (jm.landscape && !jm.smallnt) {
      ethsSProps.overflowY = `auto`;
    }

    return (
      <div>
        {jm.smallnt ? <Header data={data} /> : <Burger data={data} />}
        <Div id="everything" {...ethsSProps}>
          {conditionalHelmet}
          {helmet}
          <PageContainerDIV
            className="page-container"
            id="page-container"
            isHome={this.props.location.pathname === "/"}
          >
            {this.props.children({
              ...this.props,
            })}
          </PageContainerDIV>
          <TitleCard {...props} />
        </Div>
      </div>
    );
  }
}

export default Wrapper;

export const layoutQuery = graphql`
  query LayoutQuery {
    allMarkdownRemark(sort: { fields: [id], order: ASC }) {
      edges {
        node {
          ...Header__Details
        }
      }
    }
  }
`;
