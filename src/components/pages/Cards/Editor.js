import React from "react";

import { ControlledEditor } from "@monaco-editor/react";

const options = {
  fontSize: "20px",
  acceptSuggestionOnCommitCharacter: false,
  acceptSuggestionOnEnter: false,
  minimap: {
    enabled: false,
  },
  wordWrap: "on",
  scrollbar: {
    useShadows: false,
    verticalHasArrows: false,
    horizontalHasArrows: false,
    horizontalScrollbarSize: 0,
    verticalScrollbarSize: 0,
    verticalSliderSize: 0,
    vertical: "hidden",
    horizontal: "hidden",
    arrowSize: 0,
  },
  quickSuggestions: {
    other: false,
    comments: false,
    strings: false,
  },
  parameterHints: {
    enabled: false,
  },
  suggest: {
    snippetsPreventQuickSuggestions: false,
  },
  snippetSuggestions: "none",
  hover: {
    enabled: false,
  },
};

const Editor = (props) => {
  const { value, setValue } = props;

  const handleEditorChange = (ev, value) => {
    setValue(value);
  };

  return (
    <ControlledEditor
      theme="vs-dark"
      height="100%"
      value={value}
      onChange={handleEditorChange}
      language="javascript"
      options={options}
    />
  );
};

export default Editor;
