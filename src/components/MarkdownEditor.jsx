import React, { Component } from "react";
import Editor from "@toast-ui/editor";
import PropTypes from "prop-types";

import "@toast-ui/editor/dist/toastui-editor.css";

class MarkdownEditor extends Component {
  constructor(props) {
    super(props);

    this.editorRef = React.createRef();
    this.editor = null;
  }

  componentDidMount() {
    const { onContentChange } = this.props;

    this.editor = new Editor({
      el: this.editorRef.current,
      hideModeSwitch: true,
    });

    this.editor.addHook("change", () => {
      const content = this.editor.getMarkdown();
      onContentChange(content);
    });
  }

  componentWillUnmount() {
    if (this.editor) {
      this.editor.remove();
    }
  }

  render() {
    return <div ref={this.editorRef} />;
  }
}

MarkdownEditor.propTypes = {
  onContentChange: PropTypes.func.isRequired,
};
export default MarkdownEditor;
