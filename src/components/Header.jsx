import PropTypes from "prop-types";

function Header({ children, toggle }) {
  return (
    <div className="modal-header">
      <div className="modal-title">{children}</div>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="modal"
        onClick={toggle}
        aria-label="Close"
      />
    </div>
  );
}

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  toggle: PropTypes.func.isRequired,
};
export default Header;
