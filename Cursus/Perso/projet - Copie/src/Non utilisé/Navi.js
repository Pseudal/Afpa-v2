import * as React from "react";
import { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import "../components/service/AuthService";
import AuthService from "../components/service/AuthService";
import { Link, useNavigate, Outlet } from "react-router-dom";

const pages = ["Home", "Produits", "A propos", "Contact"];
const connectedAdmin = ["Dashboard", "Checkout", "Logout"];
const unconnected = ["Login", "Register"];
const connected = ["Checkout", "Logout"];
const token = AuthService.checkToken();
const Admin = AuthService.checkAdmin();

const Navi = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (e) => {
    if (e.currentTarget.textContent === "Home") {
      navigate("/");
    } else {
      navigate(`/${e.currentTarget.textContent}`);
    }
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = (event) => {
    if (event.currentTarget.textContent === "Logout") {
      AuthService.logout();
      navigate("/");
      window.location.reload();
    } else if(event.currentTarget.textContent) {
      navigate(`/${event.currentTarget.textContent}`);
    }
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              LOREM
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{mr:1, my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt="Remy Sharp"
                    src={
                      Admin
                        ? "https://www.pngmart.com/files/21/Admin-Profile-PNG-Clipart.png"
                        : token
                        ? "https://toppng.com/uploads/preview/icons-logos-emojis-user-icon-png-transparent-11563566676e32kbvynug.png"
                        : "https://www.rentamaid.co.za/wp-content/uploads/2021/09/user.png"
                    }
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ml:"25px",mt: "40px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {Admin &&
                  connectedAdmin.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                {token &&
                  connected.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                {!token && !Admin && unconnected.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );
};
export default Navi;
