import React, { useState } from "react";
import "./App.css";
// import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";
// import Header from "../Sidebar/Sidebar";
// import "@fontsource/roboto";
import LangProvider from "../../contexts/langProvider";
import LoadingProvider from "../../contexts/loadingProvider";
import ResultProvider from "../../contexts/resultProvider";
import { DarkTheme, LightTheme } from "../../Theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "../Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";

// import useMediaQuery from
const App = () => {
  const [theme, setTheme] = useState("light");
  // useEffect(() => {
  //   document.getElementById("preload").classList.add("hide");
  //   setLoading(false);
  // }, []);

  return (
    <ResultProvider>
      <LoadingProvider>
        <LangProvider>
          <ThemeProvider theme={theme == "light" ? LightTheme : DarkTheme}>
            <CssBaseline />
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={<Home theme={theme} setTheme={setTheme} />}
              />
              <Route
                path="/:lang"
                element={<Home theme={theme} setTheme={setTheme} />}
              />
            </Routes>
          </ThemeProvider>
        </LangProvider>
      </LoadingProvider>
    </ResultProvider>
  );
};

export default App;
