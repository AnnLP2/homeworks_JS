import React from "react";
import classNames from "classnames";

class BtnGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActiveLeft: false,
      isActiveRight: false,
    };
  }

  handleLeftButtonClick = () => {
    this.setState({
      isActiveLeft: true,
      isActiveRight: false,
    });
  };

  handleRightButtonClick = () => {
    this.setState({
      isActiveLeft: false,
      isActiveRight: true,
    });
  };

  render() {
    const { isActiveLeft, isActiveRight } = this.state;
    return (
      <div className="btn-group" role="group">
        <button
          type="button"
          className={classNames("btn", "btn-secondary", "left", {
            active: isActiveLeft,
          })}
          onClick={this.handleLeftButtonClick}
        >
          Left
        </button>
        <button
          type="button"
          className={classNames("btn", "btn-secondary", "right", {
            active: isActiveRight,
          })}
          onClick={this.handleRightButtonClick}
        >
          Right
        </button>
      </div>
    );
  }
}

export default BtnGroup;
