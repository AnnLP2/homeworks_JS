import React from "react";
import PropTypes from "prop-types";

class ListGroup extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <ul className="list-group">
        {React.Children.map(children, (child) => (
          <li className="list-group-item">{child}</li>
        ))}
      </ul>
    );
  }
}

ListGroup.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ListGroup;
