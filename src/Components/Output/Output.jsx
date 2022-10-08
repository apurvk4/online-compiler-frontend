import "./Output.css";
import TextField from "@mui/material/TextField";
import { useTheme } from "@mui/material";
import ResultContext from "../../contexts/resultContext";
import { useContext } from "react";
const Output = () => {
  const theme = useTheme();
  const { output, input, setInput } = useContext(ResultContext);
  const styleLight = {
    backgroundColor: "#fff",
    color: "#000",
  };
  const styleDark = {
    backgroundColor: "#000",
    color: "#fff",
  };
  return (
    <div className="output">
      <textarea
        disabled
        placeholder="output"
        className="output-result"
        value={output == null ? "" : output.result}
        readOnly={true}
      />
      <textarea
        className="output-inp"
        placeholder="input"
        style={theme.palette.mode == "light" ? styleLight : styleDark}
        value={input == null ? "" : value}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};
export default Output;
