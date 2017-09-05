import React, { PureComponent } from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import { css } from "glamor";
import { bwToColorStr } from "../utils/css-animes";

class LandingPage extends PureComponent {
  render() {
    let markDownPosts = this.props.data.allMarkdownRemark.edges;

    let homeMarkdown = markDownPosts.filter(post => {
      return post.node.fields.slug === "/home/";
    });

    let homeMarkdownHTML = homeMarkdown[0].node.html;

    // TODO: is not scalable. What to do if I needed
    // more than one routes to use the animation b/w -> color ?

    // NOTE: I could have used react helmet inside layout as well
    if ((this.props.location.pathname = "/")) {
      css.insert(`
        ${bwToColorStr}
        .gatsby-resp-image-image {
          animation: bwToColor 7s ease-in;
        }
      `);
    }

    return (
      <div>
        {/* <Helmet title={siteTitle} /> */}
        <div dangerouslySetInnerHTML={{ __html: homeMarkdownHTML }} />
        {/* <img src={`${__PATH_PREFIX__}/DSC_0021.JPG`} alt="image"/> */}
      </div>
    );
  }
}

export default LandingPage;

export const landingPageQuery = graphql`
  query LandingPageQuery {
    allMarkdownRemark(sort: { fields: [id], order: DESC }) {
      edges {
        node {
          id
          html
          fields {
            slug
          }
        }
      }
    }
  }
`;
