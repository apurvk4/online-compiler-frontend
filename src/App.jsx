import React, { useRef, useState } from "react";
import "./App.css";
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";
function App() {
  const [result, setResult] = useState("");
  const [selects, setSelects] = useState("cpp");
  const [theme, setTheme] = useState("vs-dark");
  const editorRef = useRef(null);
  const outref = useRef(null);
  const errRef = useRef(null);
  const inpRef = useRef(null);
  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  function showValue() {
    alert(editorRef.current.getValue());
  }
  function setLanguage(e) {
    setSelects(e.target.value);
    editorRef.current.setValue("");
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
        if (res.status == 200) {
          outref.current.value = res.result;
          errRef.current.value = "";
        } else {
          errRef.current.value = res.result;
          outref.current.value = "";
        }
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
          </select>
          <button className="submit" onClick={sendData}>
            Compile & Run
          </button>
        </div>
        <div className="editor-terminal">
          {/* <div className="editor">
            <textarea className="text-editor" placeholder="Enter Your Code Here!"/> 
            </div> */}

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
              ref={errRef}
              className=" text-terminal"
              placeholder="Terminal"
              disabled
            />
            <textarea ref={inpRef} className="text-input" placeholder="input" />
            <textarea
              ref={outref}
              className="text-output"
              placeholder="Output"
              disabled
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
