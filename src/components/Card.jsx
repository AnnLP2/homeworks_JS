import { Component } from "react";
import PropTypes from "prop-types";
import Title from "./Title";
import Body from "./Body";
import Text from "./Text";

class Card extends Component {
  static Body = Body;

  static Title = Title;

  static Text = Text;

  render() {
    const { children } = this.props;
    return <div className="card">{children}</div>;
  }
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Card;
