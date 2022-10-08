import Split from "react-split";
import CodeEditor from "../CodeEditor/CodeEditor";
import Sidebar from "../Sidebar/Sidebar";
import Output from "../Output/Output";
import "./Desktop.css";
const Desktop = (props) => {
  return (
    <div className="container">
      <Sidebar />
      <Split
        className="split"
        style={{
          height: "calc(100vh - 65px)",
          width: "calc(100vw - 58px)",
          display: "flex",
        }}
      >
        <CodeEditor toggle={props.toggleTheme} />
        <Output />
      </Split>
    </div>
  );
};
export default Desktop;
