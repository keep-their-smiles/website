import React, { PureComponent } from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";

class LandingPage extends PureComponent {
	render() {
		let markDownPosts = this.props.data.allMarkdownRemark.edges;

		let homeMarkdown = markDownPosts.filter(post => {
			return post.node.fields.slug === "/home/";
		});

		let homeMarkdownHTML = homeMarkdown[0].node.html;

		return (
			<div>
				{/* <Helmet title={siteTitle} /> */}
				<div dangerouslySetInnerHTML={{ __html: homeMarkdownHTML }} />
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
