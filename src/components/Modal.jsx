import { Component } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

class Modal extends Component {
  static Header = Header;

  static Body = Body;

  static Footer = Footer;

  render() {
    const { children, isOpen } = this.props;
    const modalClasses = classNames("modal", {
      fade: isOpen,
      show: isOpen,
    });
    return (
      <div>
        <div
          className={modalClasses}
          style={{ display: isOpen ? "block" : "none" }}
          role="dialog"
        >
          <div className="modal-dialog">
            <div className="modal-content">{children}</div>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  isOpen: PropTypes.func.isRequired,
};
export default Modal;
