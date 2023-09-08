import PropTypes from "prop-types";

function Title({ children }) {
  return <h4 className="card-title">{children}</h4>;
}

Title.propTypes = {
  children: PropTypes.string.isRequired,
};
export default Title;
