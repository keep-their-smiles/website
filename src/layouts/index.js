import React, { PureComponent } from "react";
import Link from "gatsby-link";
import Header from "../components/Header";
import { jsMediaQueries as jm } from "../utils/mediaqueries";
import Burger from "../components/NavMobile";

import { rhythm, scale } from "../utils/typography";

class Wrapper extends PureComponent {
	render() {
		let data = this.props.data.allMarkdownRemark.edges;
		return (
			<div id="everything">
				{jm.smallnt ? <Header data={data} /> : <Burger data={data} />}
				<div className="page-container" id="page-container">
					{this.props.children()}
				</div>
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
