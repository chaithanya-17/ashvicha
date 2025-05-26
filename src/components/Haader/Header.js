import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom"; // Alias Link to avoid conflict with MUI Link

import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import DriveEtaOutlinedIcon from "@mui/icons-material/DriveEtaOutlined";
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import PolicyOutlinedIcon from '@mui/icons-material/PolicyOutlined';
import CarRentalIcon from '@mui/icons-material/CarRental';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import "./Header.css";
import { Divider, IconButton, Menu, Stack } from "@mui/material";

function Header() {
  const [userType, setUserType] = useState("guest"); // 'guest', 'customer', 'host'

  const [anchorEl, setAnchorEl] = useState(null); // Used to position the menu relative to the button
  const isMenuOpen = Boolean(anchorEl); // True if anchorEl is not null (menu is open)

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget); // Set the anchor to the button that was clicked
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null); // Close the menu
  };

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  return (
    <AppBar position="static">
      {" "}
      {/* Darker primary color */}
      {/* App Title/Logo */}
      <div className="header-container">
        <div>
          <Typography
            component={RouterLink} // Use RouterLink for navigation
            to="/"
            sx={{
              textDecoration: "none",
              color: "black",
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            AshViCha
          </Typography>
        </div>

        {/* Navigation Links - Conditional Rendering */}
        {/* <div>
          <Box>
            {userType === "guest" && (
              <>
                <Button color="inherit" component={RouterLink} to="/">
                  Home
                </Button>
                <Button color="inherit" component={RouterLink} to="/about">
                  About Us
                </Button>
                <Button
                  color="inherit"
                  component={RouterLink}
                  to="/how-it-works"
                >
                  How It Works
                </Button>
                <Button color="inherit" component={RouterLink} to="/login">
                  Login
                </Button>
                <Button color="inherit" component={RouterLink} to="/register">
                  Register
                </Button>
              </>
            )}

            {userType === "customer" && (
              <>
                <Button
                  color="inherit"
                  component={RouterLink}
                  to="/browse-cars"
                >
                  Browse Cars
                </Button>
                <Button color="inherit" component={RouterLink} to="/my-rentals">
                  My Rentals
                </Button>
                <Button color="inherit" component={RouterLink} to="/profile">
                  Profile
                </Button>
                <Button color="inherit" onClick={() => setUserType("guest")}>
                  Logout
                </Button>
              </>
            )}

            {userType === "host" && (
              <>
                <Button color="inherit" component={RouterLink} to="/my-cars">
                  My Cars
                </Button>
                <Button color="inherit" component={RouterLink} to="/list-car">
                  List a Car
                </Button>
                <Button color="inherit" component={RouterLink} to="/bookings">
                  Bookings
                </Button>
                <Button color="inherit" component={RouterLink} to="/profile">
                  Profile
                </Button>
                <Button color="inherit" onClick={() => setUserType("guest")}>
                  Logout
                </Button>
              </>
            )}
            </Box>
            </div> */}

        {/* User Type Switcher (for Demo) */}
        <div>
          <Button
            onClick={() => setUserType("guest")}
            sx={{
              color: "black",
              border: "1px solid #D0D0D0",
              borderRadius: "8px",
              padding: "5px 10px",
              marginRight: "10px",
              textTransform: "none",
              fontFamily:
                "RlBasisGrotesque, Avenir, Helvetica Neue, Helvetica, sans-serif",
              fontSize: "12px",
              fontWeight: "700",
            }}
          >
            Become a host
          </Button>
          <Button
            edge="end" // Aligns to the end
            aria-label="account of current user"
            aria-controls="profile-menu" // Link to the menu by ID
            aria-haspopup="true" // Indicates it triggers a popup menu
            aria-expanded={isMenuOpen ? "true" : undefined} // State of the popup
            onClick={handleProfileMenuOpen}
            color="inherit"
            sx={{ color: "black" }}
          >
            <Stack direction="row" spacing={0.5} alignItems="center">
              {" "}
              {/* Use Stack for horizontal layout */}
              <DensityMediumIcon />
              <AccountCircleIcon />
            </Stack>
          </Button>

          <Menu
            anchorEl={anchorEl} // The element that the menu is anchored to
            id="profile-menu" // Matches aria-controls on the IconButton // Where the menu should open from
            open={isMenuOpen} // Controls visibility
            onClose={handleProfileMenuClose}
            sx={{
              "& .MuiPaper-root": {
                // Target the Paper component that wraps the menu list
                minWidth: 350,
                borderRadius: "15px",
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              },
              marginTop: "1%", // Custom styles for the menu
            }}
          >
            <MenuItem> Login</MenuItem>
            <MenuItem> Signup</MenuItem>
            <MenuItem>
              {" "}
              <DriveEtaOutlinedIcon sx={{ marginRight: "8px" }} /> Become a host
            </MenuItem>
            <Divider />
            <MenuItem>
              {" "}
              <CarRentalIcon sx={{ marginRight: "8px" }} /> How it works
            </MenuItem>
            <MenuItem>
              {" "}
              <SupportAgentIcon sx={{ marginRight: "8px" }} /> Contact Support
            </MenuItem>
            <MenuItem>
              {" "}
              <ArticleOutlinedIcon sx={{ marginRight: "8px" }} /> Legal
            </MenuItem>
            <MenuItem>
              {" "}
              <PolicyOutlinedIcon sx={{ marginRight: "8px" }} /> Insurance & Protection
            </MenuItem>
            <MenuItem>
              {" "}
              <HandymanOutlinedIcon sx={{ marginRight: "8px" }} /> Host tools
            </MenuItem>
            <MenuItem>
              {" "}
              <CalculateOutlinedIcon sx={{ marginRight: "8px" }} /> Carculator
            </MenuItem>
          </Menu>
        </div>
      </div>
    </AppBar>
  );
}
export default Header;
