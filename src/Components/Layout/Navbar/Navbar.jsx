import React from "react";
import { Outlet } from "react-router-dom";
import { GlobalContext } from "../../../context/GlobalContext";
import { useContext } from "react";
import Switch from "@mui/material/Switch";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import AdbIcon from "@mui/icons-material/Adb";

const Navbar = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const handleChange = () => {
    dispatch({ type: "SWITCH_MODE" });
  };

  return (
    <div>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              CLINICA DE ESPECIALISTAS
            </Typography>

            <Switch
              checked={state.isDark}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
              color="secondary"
            />
          </Toolbar>
        </Container>
      </AppBar>

      <div style={{ minHeight: "80vh" }}>
        <Outlet />
      </div>
    </div>
  );
};
export default Navbar;
