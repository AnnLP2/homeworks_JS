import PropTypes from "prop-types";

function Body({ children }) {
  return <div className="modal-body">{children}</div>;
}

Body.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};
export default Body;
