import React from "react";

class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logData: [],
      newId: 1,
    };
  }

  handlePlusClick = () => {
    const { logData, newId } = this.state;
    const newValue = logData.length > 0 ? logData[0].value + 1 : 1;
    const newItem = { id: newId, value: newValue };
    const updatedLogData = [newItem, ...logData];
    this.setState({ logData: updatedLogData, newId: newId + 1 });
  };

  handleMinusClick = () => {
    const { logData, newId } = this.state;
    const newValue = logData.length > 0 ? logData[0].value - 1 : 0;
    const newItem = { id: newId, value: newValue };
    const updatedLogData = [newItem, ...logData];
    this.setState({ logData: updatedLogData, newId: newId + 1 });
  };

  handleRemoveLog = (id) => {
    const { logData } = this.state;
    const updatedLogData = logData.filter((item) => item.id !== id);
    this.setState({ logData: updatedLogData });
  };

  render() {
    const { logData } = this.state;
    return (
      <div>
        <div className="btn-group font-monospace" role="group">
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={this.handlePlusClick}
          >
            +
          </button>
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={this.handleMinusClick}
          >
            -
          </button>
        </div>
        <div className="list-group">
          {logData.map((item) => (
            <button
              key={item.id}
              type="button"
              className="list-group-item list-group-item-action"
              onClick={() => this.handleRemoveLog(item.id)}
            >
              {item.value}
            </button>
          ))}
        </div>
      </div>
    );
  }
}

export default Component;
