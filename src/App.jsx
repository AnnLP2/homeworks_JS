import "@toast-ui/editor/dist/toastui-editor.css";

import MarkdownEditor from "./components/MarkdownEditor";

function App() {
  return (
    <div className="App">
      {/* eslint-disable-next-line no-console */}
      <MarkdownEditor onContentChange={console.log} />
    </div>
  );
}

export default App;
