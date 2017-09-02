import React, { PureComponent } from "react";
import Link from "gatsby-link";
import Header from "../components/Header";

import { rhythm, scale } from "../utils/typography";

class Wrapper extends PureComponent {
	render() {
		return (
			<div>
				<Header data={this.props.data.allMarkdownRemark.edges} />
				{this.props.children()}
			</div>
		);
	}
}

export default Wrapper;

export const layoutQuery = graphql`
	query LayoutQuery {
		allMarkdownRemark(sort: { fields: [id], order: DESC }) {
			edges {
				node {
					...Header__Details
				}
			}
		}
	}
`;
