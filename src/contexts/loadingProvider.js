import { useState } from "react";
import LoadingContext from "./loadingContext";

const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  function updateLoading(val) {
    if (!val) {
      document.getElementById("preload").classList.add("hide");
      setLoading(false);
    } else {
      setLoading(true);
    }
  }
  return (
    <LoadingContext.Provider value={{ loading, updateLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

export default LoadingProvider;
