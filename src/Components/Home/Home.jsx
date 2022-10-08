import Desktop from "../Desktop/Desktop";
import Mobile from "../Mobile/Mobile";
import useMediaQuery from "../../mediaquery";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LangContext from "../../contexts/langContext";
const Home = ({ theme, setTheme }) => {
  const { lang } = useParams();
  console.log(lang);
  const { setLanguage } = useContext(LangContext);
  const isDesktop = useMediaQuery("(min-width: 800px)");
  function toggleTheme() {
    setTheme(theme == "light" ? "dark" : "light");
  }
  useEffect(() => {
    if (lang) {
      setLanguage(lang);
    }
  }, [lang]);
  return (
    <>
      {isDesktop ? (
        <Desktop toggleTheme={toggleTheme} />
      ) : (
        <Mobile toggle={toggleTheme} />
      )}
    </>
  );
};

export default Home;
