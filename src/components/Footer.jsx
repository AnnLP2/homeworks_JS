import PropTypes from "prop-types";

function Footer({ children }) {
  return <div className="modal-footer">{children}</div>;
}

Footer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
};
export default Footer;
