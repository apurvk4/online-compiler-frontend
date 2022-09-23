import React, { useRef, useState } from "react";
import "./App.css";
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";
function App() {
  const [result, setResult] = useState("");
  const [selects, setSelects] = useState("cpp");
  const [theme, setTheme] = useState("vs-dark");
  const editorRef = useRef(null);
  const outRef = useRef(null);
  const inpRef = useRef(null);
  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }
  function setLanguage(e) {
    setSelects(e.target.value);
    editorRef.current.setValue("");
    outRef.current.value = "";
  }
  function sendData() {
    fetch(process.env.REACT_APP_FETCHURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        language: selects,
        code: editorRef.current.getValue(),
        input: inpRef.current.value,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setResult(res.result);
        outRef.current.value = result;
      })
      .catch((e) => console.log(e));
  }
  function updateTheme(e) {
    setTheme(e.target.value);
  }
  return (
    <>
      <div className="code-container">
        <div className="dropdown">
          <select
            className="dropdown-list"
            value={theme}
            onChange={updateTheme}
          >
            <option value="light">light</option>
            <option value="vs-dark">vs-dark</option>
          </select>
          <select
            value={selects}
            onChange={setLanguage}
            className="dropdown-list"
          >
            <option value="c">c</option>
            <option value="cpp">c++</option>
            <option value="python3">python3</option>
            <option value="java">java</option>
          </select>
          <button className="submit" onClick={sendData}>
            Compile & Run
          </button>
        </div>
        <div className="editor-terminal">
          <Editor
            height="100%"
            width="700px"
            theme={theme}
            defaultLanguage={selects}
            onMount={handleEditorDidMount}
            className="text-editor"
            style={{ borderRadius: "10px" }}
          />
          <div className="terminal">
            <textarea
              ref={outRef}
              className=" text-terminal"
              placeholder="Terminal"
              disabled
            />
            <textarea ref={inpRef} className="text-input" placeholder="input" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
