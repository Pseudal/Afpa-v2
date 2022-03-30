import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import "../service/AuthService";
import AuthService from "../service/AuthService";
import { Link, useNavigate, Outlet } from "react-router-dom";
import "./DashMenuTest";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LoginIcon from '@mui/icons-material/Login';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LogoutIcon from '@mui/icons-material/Logout';

const triche = [1]
const pages = ["Home", "Produits", "A propos", "Contact"];
const connectedAdmin = [ "Checkout","Dashboard", "Logout"];
const unconnected = ["Login", "Register"];
const connected = ["Checkout", "Logout"];

const token = AuthService.checkToken();
const Admin = AuthService.checkAdmin();

const NaviTest = () => {
  const [state, setState] = React.useState(false);
  const navigate = useNavigate();

  const navigation = (prop) => {
    if (prop === "Logout") {
      AuthService.logout();
      navigate("/");
      window.location.reload();
    } else if (prop) {
      navigate(`/${prop}`);
    }
    setAnchorElUser(null);
  }
  
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={() => setState(false)}
      onKeyDown={() => setState(false)}
    >
      <List>
      {/* {!token && !Admin && triche.map((index) => (
      <Box key={index}>
        <Typography textAlign="center" variant="body1" color="initial">
          Vous n'êtes pas connecté
        </Typography>
        <Divider />
      </Box>
      ))} */}

      {(!token && !Admin) && (
      <Box>
        <Typography textAlign="center" variant="body1" color="initial">
          Vous n'êtes pas connecté
        </Typography>
        <Divider />
      </Box>
      )}

      {/* {token && triche.map((index) => (
      <Box key={index}>
        <Box sx={{display:"flex", flexDirection: "column", alignItems:"center"}}>
          <Avatar
            alt="Remy Sharp"
            src={"https://www.pngmart.com/files/21/Admin-Profile-PNG-Clipart.png"}
          />
        <Typography textAlign="center" variant="body1" color="initial">
          Bonjour
        </Typography>
        <Typography textAlign="center" variant="body1" color="initial">
          Utilisateur !
        </Typography>
      </Box> 
      <Divider /> 
      </Box>
      ))} */}

    {token && (
      <Box>
        <Box sx={{display:"flex", flexDirection: "column", alignItems:"center"}}>
          <Avatar
            alt="Remy Sharp"
            src={"https://www.pngmart.com/files/21/Admin-Profile-PNG-Clipart.png"}
          />
        <Typography textAlign="center" variant="body1" color="initial">
          Bonjour
        </Typography>
        <Typography textAlign="center" variant="body1" color="initial">
          Utilisateur !
        </Typography>
      </Box> 
      <Divider /> 
      </Box>
      )}

      {Admin && triche.map((index) => (
      <Box key={index}>
        <Box sx={{display:"flex", flexDirection: "column", alignItems:"center"}}>
          <Avatar
            alt="Remy Sharp"
            src={"https://www.pngmart.com/files/21/Admin-Profile-PNG-Clipart.png"}
          />
        <Typography textAlign="center" variant="body1" color="initial">
          Bonjour
        </Typography>
        <Typography sx={{mb:1}} textAlign="center" variant="body1" color="initial">
          Administrateur!
        </Typography>
      </Box> 
      <Divider />
      </Box>
      ))}
        {!token && !Admin && unconnected.map((text, index) => (
          <ListItem
            onClick={()=>{navigation(text)}}
            button
            key={text}
          >
          <ListItemIcon>
            {index % 2 === 0 ? <LoginIcon /> : <FiberNewIcon />}
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItem>
        ))}
        {token && connected.map((text, index) => (
          <ListItem onClick={()=>{navigation(text)}} button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <ShoppingCartIcon /> : <LogoutIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        {Admin && connectedAdmin.map((text, index) => (
          <ListItem onClick={()=>{navigation(text)}} button key={text}>
            <ListItemIcon>
              {index % 3 === 0 ? <ShoppingCartIcon /> : index % 2 === 0 ? <LogoutIcon /> : <DashboardIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  //////NAVVVVVV///////
  
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
                  sx={{ mr: 1, my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={() => setState(true)} sx={{ p: 0 }}>
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
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <div>
        <Drawer anchor={"right"} open={state} onClose={() => setState(false)}>
          {list()}
        </Drawer>
      </div>
      <Outlet />
    </>
  );
};
export default NaviTest;
