import { Component } from "react";
import PropTypes from "prop-types";

class Form extends Component {
  render() {
    const { value, onChange, onSubmit } = this.props;
    return (
      <form className="d-flex" onSubmit={onSubmit}>
        <div className="me-3">
          <input
            type="text"
            value={value}
            onChange={onChange}
            required=""
            className="form-control"
            placeholder="I am going..."
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
export default Form;
