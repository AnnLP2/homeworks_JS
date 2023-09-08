import PropTypes from "prop-types";

function Text({ children }) {
  return <p className="card-text">{children}</p>;
}

Text.propTypes = {
  children: PropTypes.string.isRequired,
};
export default Text;
