import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import StarBorder from "@mui/icons-material/StarBorder";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import { FaTwitter, FaDiscord, FaFacebookF } from 'react-icons/fa';

const Contactinfo = () => {
  const [expanded, setExpanded] = React.useState("");

  const handleclick = (panel) => {
    console.log(panel);
    console.log(expanded);
    setExpanded(expanded == panel ? "" : panel);
  };

  return (
    <>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper"}}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader sx={{display:'flex', justifyContent:"center"}} component="div" id="nested-list-subheader">
            Autre façon de nous contacter
          </ListSubheader>
        }
      >
        <ListItemButton
          onClick={() => {
            handleclick("panel1");
          }}
        >
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Lettre" />
        </ListItemButton>
        <Collapse in={expanded === "panel1"} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <ArrowForwardIosIcon />
              </ListItemIcon>
              <ListItemText primary="42 avenue des Champs Elysées, 75000 Paris" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton
          onClick={() => {
            handleclick("panel2");
          }}
        >
          <ListItemIcon>
            <LocalPhoneIcon />
          </ListItemIcon>
          <ListItemText primary="téléphone" />
        </ListItemButton>
        <Collapse in={expanded === "panel2"} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <ArrowForwardIosIcon />
              </ListItemIcon>
              <ListItemText primary="0606060606" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton
          onClick={() => {
            handleclick("panel3");
          }}
        >
          <ListItemIcon>
            <AlternateEmailIcon />
          </ListItemIcon>
          <ListItemText primary="Mail" />
        </ListItemButton>
        <Collapse in={expanded === "panel3"} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <ArrowForwardIosIcon />
              </ListItemIcon>
              <ListItemText primary="lorem@gmail.com" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton
          onClick={() => {
            handleclick("panel4");
          }}
        >
          <ListItemIcon>
            <FaTwitter />
          </ListItemIcon>
          <ListItemText primary="Twitter" />
        </ListItemButton>
        <Collapse in={expanded === "panel4"} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <ArrowForwardIosIcon />
              </ListItemIcon>
              <ListItemText primary="@Lorem" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton
          onClick={() => {
            handleclick("panel5");
          }}
        >
          <ListItemIcon>
            <FaDiscord />
          </ListItemIcon>
          <ListItemText primary="Discord" />
        </ListItemButton>
        <Collapse in={expanded === "panel5"} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <ArrowForwardIosIcon />
              </ListItemIcon>
              <ListItemText primary="ICI" />
            </ListItemButton>
          </List>
        </Collapse>
        <ListItemButton
          onClick={() => {
            handleclick("panel6");
          }}
        >
          <ListItemIcon>
            <FaFacebookF />
          </ListItemIcon>
          <ListItemText primary="Facebook" />
        </ListItemButton>
        <Collapse in={expanded === "panel6"} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <ArrowForwardIosIcon />
              </ListItemIcon>
              <ListItemText primary="ICI" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </>
  );
};

export default Contactinfo;
