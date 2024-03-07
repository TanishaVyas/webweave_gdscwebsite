import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Hidden,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link as RouterLink } from "react-router-dom";
import logo from "..//Images//logo.png";

const gdscMenuItems = [
  { to: "/", text: "Home" },
  { to: "/events", text: "Events" },
  { to: "/team", text: "Team" },
  { to: "/contact", text: "Contact" },
];

function GDSCNavbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleLinkClick = () => {
    setDrawerOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: "#F3F0FF" }}>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: "transparent",
          border: "2px solid black",
          borderRadius: "15px",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            paddingX: "20px", // Adjusted padding for space between content and borders
          }}
        >
          <RouterLink to="/">
            <img
              src={logo}
              alt="GDSC Logo"
              style={{
                width: "40px",
                height: "20px",
                marginRight: "10px",
              }}
            />
          </RouterLink>
          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: "18px", sm: "20px", md: "24px" },
              color: "black",
            }}
          >
            <b>GDSC SIT</b>
          </Typography>

          <Hidden mdUp>
            <IconButton
              size="large"
              edge="end"
              aria-label="menu"
              sx={{ ml: 2, marginRight: "0px", marginLeft: "auto" }}
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>

          <Hidden mdDown>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexGrow: 1,
                marginLeft: "auto", // Align to the right
              }}
            >
              {gdscMenuItems.map((item, index) => (
                <Button
                  key={index}
                  component={RouterLink}
                  to={item.to}
                  onClick={handleLinkClick}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: { xs: "14px", sm: "16px" },
                      color: "black",
                    }}
                  >
                    {item.text}
                  </Typography>
                </Button>
              ))}
            </Box>
          </Hidden>
        </Toolbar>
      </AppBar>
      {/* for smaller screens */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <List sx={{ width: "100%", textAlign: "center" }}>
          {gdscMenuItems.map((item, index) => (
            <ListItem
              button
              key={index}
              onClick={handleLinkClick}
              component={RouterLink}
              to={item.to}
            >
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}

export default GDSCNavbar;
