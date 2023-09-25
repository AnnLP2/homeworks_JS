import { useEffect, useRef } from "react";
import Editor from "@toast-ui/editor";
import PropTypes from "prop-types";

import "@toast-ui/editor/dist/toastui-editor.css";

function MarkdownEditor({ onContentChange }) {
  const editorRef = useRef(null);
  let editor = null;

  useEffect(() => {
    editor = new Editor({
      el: editorRef.current,
      hideModeSwitch: true,
    });

    editor.addHook("change", () => {
      const content = editor.getMarkdown();
      onContentChange(content);
    });

    return () => {
      if (editor) {
        editor.remove();
      }
    };
  }, [onContentChange]);

  return <div ref={editorRef} />;
}

MarkdownEditor.propTypes = {
  onContentChange: PropTypes.func.isRequired,
};
export default MarkdownEditor;
