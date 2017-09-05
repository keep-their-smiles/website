import React, { PureComponent } from "react";
import Link from "gatsby-link";
import Header from "../components/Header";
import { jsMediaQueries as jm } from "../utils/mediaqueries";
import Burger from "../components/NavMobile";
import { Div } from "glamorous";
import Helmet from "react-helmet";
import TitleCard from "../components/TitleCard";

const props = {
  title: `Keep Their Smiles`,
  subtitle: `A Fund Raiser`,
};

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
    let helmet;

    if (this.props.location.pathname === "/") {
      ethsSProps.height = `100vh`;
      ethsSProps.overflowY = `hidden`;
      helmet = (
        <Helmet>
          <style type="text/css">
            {`
              ::-webkit-scrollbar {
                display: none;
              }

              body {
                background: "aqua"
              }

              .page-container p {
                margin-bottom: 0;
              }
            `}
          </style>
        </Helmet>
      );
    }

    return (
      <div>
        {jm.smallnt ? <Header data={data} /> : <Burger data={data} />}
        <Div id="everything" {...ethsSProps}>
          {helmet}
          <div className="page-container" id="page-container" style={{}}>
            {this.props.children()}
          </div>
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
