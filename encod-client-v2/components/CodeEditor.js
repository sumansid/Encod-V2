import React from "react";
import Editor from "@monaco-editor/react";
import map from "lang-map";

const CodeEditor = ({ repoData, fileExtension }) => {
  //detect.filename(file ); //=> "JavaScript"
  let language = map.languages(fileExtension)[0];
  console.log("language ", language);
  return (
    <Editor
      height="50vh"
      defaultLanguage={language}
      defaultValue={repoData}
      theme="vs-dark"
    />
  );
};

export default CodeEditor;
