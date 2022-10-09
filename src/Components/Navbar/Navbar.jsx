import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Cpp from "../Sidebar/Cpp";
import C from "../Sidebar/C";
import Python from "../Sidebar/Python";
import Java from "../Sidebar/Java";
import LangContext from "../../contexts/langContext";
import { Link } from "react-router-dom";
import { styled } from "@mui/material";
const drawerWidth = 240;
const navItems = [
  { value: "Home", url: "/" },
  { value: "About", url: "https://github.com/apurvk4" },
  {
    value: "Contact",
    url: "https://github.com/apurvk4/online-compiler-frontend",
  },
];
const drawerItems = ["cpp", "c", "python3", "java"];
const StyledLink = styled(Link)(({ theme }) => ({
  width: "100%",
  textDecoration: "none",
  color: theme.palette.text.primary,
}));
function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { language, setLanguage } = React.useContext(LangContext);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const getIcon = (Item) => {
    switch (Item) {
      case "cpp":
        return <Cpp value={Item} />;
      case "c":
        return <C value={Item} />;
      case "python3":
        return <Python value={Item} />;
      case "java":
        return <Java value={Item} />;
    }
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Online Compiler
      </Typography>
      <Divider />
      <List>
        {drawerItems.map((item) => (
          <ListItem key={item} disablePadding>
            <StyledLink to={"/" + item}>
              <ListItemButton
                selected={language == item}
                onClick={(e) => {
                  setLanguage(e.target.getAttribute("value"));
                }}
                value={item}
                sx={{ textAlign: "center" }}
              >
                {getIcon(item)}
                <span value={item} style={{ marginLeft: "5px" }}>
                  {item}
                </span>
              </ListItemButton>
            </StyledLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", marginBottom: "70px" }}>
      <AppBar component="nav" color="primary" enableColorOnDark>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { sm: "none", md: "block" } }}
          >
            Online Compiler
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
            {navItems.map((item) => (
              <Button key={item.value} sx={{ color: "#fff" }} href={item.url}>
                {item.value}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { sm: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
export default Navbar;
