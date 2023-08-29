import React from "react";
import PropTypes from "prop-types";

class Progress extends React.Component {
  render() {
    const { percentage } = this.props;
    const style = {
      width: `${percentage}%`,
    };
    return (
      <div className="progress">
        {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
        <div
          className="progress-bar progress-bar-striped progress-bar-animated"
          role="progressbar"
          style={style}
          aria-valuenow={percentage}
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>
    );
  }
}

Progress.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default Progress;
