import Link from "gatsby-link";
import Helmet from "react-helmet";
import { rhythm, scale } from "../utils/typography";
import g from "glamorous";
import Nav from "./Nav";

const HeaderS = g.header({
	background: "black",
});

const Header = ({ data }) => {
	return (
		<HeaderS>
			<Nav data={data} />
		</HeaderS>
	);
};

export default Header;

export const headerFragment = graphql`
	fragment Header__Details on MarkdownRemark {
		id
		frontmatter {
			title
		}
		fields {
			slug
		}
	}
`;
