import React, { PureComponent } from "react";
import { slide as Menu } from "react-burger-menu";
import Link from "gatsby-link";
import { rhythm as r } from "../utils/typography";
import g from "glamorous";

const burgerStyles = {
  bmBurgerBars: {
    background: "#000",
  },
  bmBurgerButton: {
    position: "fixed",
    width: r(1.3),
    height: r(1.1),
    left: r(0.8),
    top: r(0.8),
    zIndex: 3,
  },
  bmMenu: {
    width: r(12),
    background: "#373a47",
    padding: `${r(2.5)} ${r(2)} 0`,
    font: `bold ${r(0.9)} Raleway, sans-serif`,
  },
  bmCrossButton: {
    background: "transparent",
  },
  bmCross: {
    background: "#fffce1",
  },
  bmOverlay: {
    background: "rgba(208, 205, 215, 0.8)",
  },
  bmItemList: {
    // padding: "10px",
  },
};

const LinkS = g(Link)({
  padding: `${r(0.4)} 0`,
  color: "#b8b7ad",
});

class Burger extends PureComponent {
  state = {
    isOpen: false,
  };

  closeSlider = () => {
    this.setState({
      isOpen: false,
    });
  };

  isMenuOpen = state => {
    this.setState({
      isOpen: state.isOpen,
    });
    return state.isOpen;
  };

  render() {
    return (
      <Menu
        isOpen={this.state.isOpen}
        onStateChange={this.isMenuOpen}
        styles={burgerStyles}
        pageWrapId="page-container"
        outerContainerId="everything"
      >
        {this.props.data.map(post => {
          const {
            id,
            frontmatter: { title = "default" },
            fields: { slug = "default" },
          } = post.node;

          if (slug !== "/home/") {
            return (
              <LinkS key={post.node.id} to={slug} onClick={this.closeSlider}>
                {title}
              </LinkS>
            );
          }
        })}
        <LinkS to="/" onClick={this.closeSlider}>
          Home
        </LinkS>
      </Menu>
    );
  }
}

export default Burger;
