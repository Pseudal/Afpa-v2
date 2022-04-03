import React from "react";
import { Button} from "@mui/material";
import { Box } from "@mui/system";
import PersonIcon from "@mui/icons-material/Person";
import ArticleIcon from "@mui/icons-material/Article";
import EmailIcon from "@mui/icons-material/Email";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, Outlet } from "react-router-dom";

const DashMenu = () => {
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          display: "flex",
          float: "right",
          left: "91%",
          mt: 25,
          flexDirection: "column",
          borderRadius: "5px",
        }}
        bgcolor="white"
      >
        <Link to={"/Dashboard"}>
          <Button sx={{ color: "black" }}>
            <ArticleIcon fontSize="large" />
          </Button>
        </Link>

        <Link to={"/DashboardProduct"}>
          <Button sx={{ color: "black" }}>
            <ShoppingCartIcon fontSize="large" />
          </Button>
        </Link>
        <Link to={"/DashboardMessage"}>
          <Button sx={{ color: "black" }}>
            <EmailIcon fontSize="large" />
          </Button>
        </Link>
        <Link to={"/DashboardUser"}>
          <Button sx={{ color: "black" }}>
            <PersonIcon fontSize="large" />
          </Button>
        </Link>
      </Box>
      <Outlet />
    </>
  );
};

export default DashMenu;
