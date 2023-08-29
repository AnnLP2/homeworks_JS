import React from "react";
import PropTypes from "prop-types";

class Alert extends React.Component {
  render() {
    const { type, text } = this.props;
    const alertClassName = `alert alert-${type}`;

    return <div className={alertClassName}>{text}</div>;
  }
}

Alert.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ]).isRequired,
};
export default Alert;
