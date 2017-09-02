import Link from "gatsby-link";
import Helmet from "react-helmet";
import { rhythm, scale } from "../utils/typography";
import g from "glamorous";
import Nav from "./Nav";

const Header = ({ data }) => {
	return <Nav data={data} />;
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
