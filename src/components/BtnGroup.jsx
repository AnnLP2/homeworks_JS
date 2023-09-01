import React from "react";
import classNames from "classnames";

class BtnGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeButton: null,
    };
  }

  handleButtonClick = (event) => {
    const button = event.target.textContent.toLowerCase();
    this.setState({ activeButton: button });
  };

  render() {
    const { activeButton } = this.state;
    return (
      <div className="btn-group" role="group">
        <button
          type="button"
          className={classNames("btn", "btn-secondary", "left", {
            active: activeButton === "left",
          })}
          onClick={this.handleButtonClick}
        >
          Left
        </button>
        <button
          type="button"
          className={classNames("btn", "btn-secondary", "right", {
            active: activeButton === "right",
          })}
          onClick={this.handleButtonClick}
        >
          Right
        </button>
      </div>
    );
  }
}

export default BtnGroup;
