import Link from "gatsby-link";
import Helmet from "react-helmet";
import { rhythm, scale } from "../utils/typography";
import g from "glamorous";

let LinkedS = g(Link)({
	background: "black",
	color: "white",
	fontFamily: "Space Mono",
});

const Nav = ({ data }) => {
	let titles = data.map(post => {
		const {
			id,
			frontmatter: { title = "default" },
			fields: { slug = "default" },
		} = post.node;

		return (
			<LinkedS key={post.node.id} to={slug}>
				{title}
			</LinkedS>
		);
	});

	return <nav className="nav-wrapper">{titles}</nav>;
};

export default Nav;
