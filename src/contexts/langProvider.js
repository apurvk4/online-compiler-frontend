import { useState } from "react";
import LangContext from "./langContext";

const LangProvider = ({ children }) => {
  const [language, setLanguage] = useState("cpp");
  return (
    <LangContext.Provider value={{ language, setLanguage }}>
      {children}
    </LangContext.Provider>
  );
};

export default LangProvider;
