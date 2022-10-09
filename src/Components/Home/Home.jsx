import Desktop from "../Desktop/Desktop";
import Mobile from "../Mobile/Mobile";
import useMediaQuery from "../../mediaquery";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LangContext from "../../contexts/langContext";
import Error from "../Error/Error";
const enums = ["c", "cpp", "python3", "java"];
const Home = ({ theme, setTheme }) => {
  const { lang } = useParams();
  const [params, setParams] = useState(true);
  const { setLanguage } = useContext(LangContext);
  const isDesktop = useMediaQuery("(min-width: 800px)");
  function toggleTheme() {
    setTheme(theme == "light" ? "dark" : "light");
  }
  function setView() {
    if (isDesktop) {
      return <Desktop toggleTheme={toggleTheme} />;
    } else {
      return <Mobile toggle={toggleTheme} />;
    }
  }
  useEffect(() => {
    if (lang) {
      if (enums.includes(lang)) {
        setLanguage(lang);
      } else {
        setParams(false);
      }
    }
  }, [lang]);
  return <>{!params ? <Error /> : setView()}</>;
};

export default Home;
