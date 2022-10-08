import "./Sidebar.css";
import { useContext, useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Tooltip from "@mui/material/Tooltip";
import Cpp from "./Cpp";
import C from "./C";
import Python from "./Python";
import Java from "./Java";
import LangContext from "../../contexts/langContext";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const { language, setLanguage } = useContext(LangContext);
  const handleChange = (event, nextView) => {
    if (nextView) {
      setLanguage(nextView);
    }
  };
  return (
    <div className="sidebar">
      <ToggleButtonGroup
        orientation="vertical"
        value={language}
        exclusive
        onChange={handleChange}
      >
        <Tooltip value="cpp" title="C++">
          <Link to="/cpp">
            <ToggleButton value="cpp" aria-label="cpp">
              <Cpp />
            </ToggleButton>
          </Link>
        </Tooltip>
        <Tooltip value="c" title="C">
          <Link to="/c">
            <ToggleButton value="c" aria-label="c">
              <C />
            </ToggleButton>
          </Link>
        </Tooltip>
        <Tooltip value="python3" title="python3">
          <Link to="/python3">
            <ToggleButton value="python3" aria-label="python3">
              <Python />
            </ToggleButton>
          </Link>
        </Tooltip>
        <Tooltip value="java" title="java">
          <Link to="/java">
            <ToggleButton value="java" aria-label="java">
              <Java />
            </ToggleButton>
          </Link>
        </Tooltip>
      </ToggleButtonGroup>
    </div>
  );
};
export default Sidebar;
