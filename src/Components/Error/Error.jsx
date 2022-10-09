import { Box, Button, Typography } from "@mui/material";
import { purple } from "@mui/material/colors";
import { useContext, useEffect } from "react";
import LoadingContext from "../../contexts/loadingContext";
const primary = purple[499];
const Error = () => {
  const { loading, updateLoading } = useContext(LoadingContext);
  useEffect(() => {
    if (loading) {
      updateLoading(false);
    }
  }, []);
  function reloadApp() {
    window.location.assign(window.location.origin);
  }
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: primary,
      }}
    >
      <Typography variant="h1" style={{ color: "black" }}>
        404
      </Typography>
      <Typography variant="h6" style={{ color: "black" }}>
        The page you’re looking for doesn’t exist.
      </Typography>
      <Button onClick={reloadApp} variant="contained">
        Back Home
      </Button>
    </Box>
  );
};
export default Error;
