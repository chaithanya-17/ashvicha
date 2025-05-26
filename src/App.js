import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Haader/Header";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import {
  Box,
  createTheme,
  CssBaseline,
  ThemeProvider,
  Typography,
} from "@mui/material";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
  // Optional: Custom theme for MUI
  const customTheme = createTheme({
    
  });

  const AboutPage = () => (
    <Box sx={{ p: 4, textAlign: "center" }}>
      <Typography variant="h4">About Us</Typography>
      <Typography>Learn more about our mission.</Typography>
    </Box>
  );
  const HowItWorksPage = () => (
    <Box sx={{ p: 4, textAlign: "center" }}>
      <Typography variant="h4">How It Works</Typography>
      <Typography>Simple steps to rent or list a car.</Typography>
    </Box>
  );
  const LoginPage = () => (
    <Box sx={{ p: 4, textAlign: "center" }}>
      <Typography variant="h4">Login</Typography>
      <Typography>Enter your credentials.</Typography>
    </Box>
  );
  const RegisterPage = () => (
    <Box sx={{ p: 4, textAlign: "center" }}>
      <Typography variant="h4">Register</Typography>
      <Typography>Join us today!</Typography>
    </Box>
  );
  const BrowseCarsPage = () => (
    <Box sx={{ p: 4, textAlign: "center" }}>
      <Typography variant="h4">Browse Available Cars</Typography>
      <Typography>Find your perfect ride.</Typography>
    </Box>
  );
  const MyRentalsPage = () => (
    <Box sx={{ p: 4, textAlign: "center" }}>
      <Typography variant="h4">My Rentals</Typography>
      <Typography>View your current and past bookings.</Typography>
    </Box>
  );
  const MyCarsPage = () => (
    <Box sx={{ p: 4, textAlign: "center" }}>
      <Typography variant="h4">My Cars</Typography>
      <Typography>Manage your listed vehicles.</Typography>
    </Box>
  );
  const ListCarPage = () => (
    <Box sx={{ p: 4, textAlign: "center" }}>
      <Typography variant="h4">List a Car</Typography>
      <Typography>Start earning by listing your car.</Typography>
    </Box>
  );
  const BookingsPage = () => (
    <Box sx={{ p: 4, textAlign: "center" }}>
      <Typography variant="h4">Bookings</Typography>
      <Typography>Manage your car bookings.</Typography>
    </Box>
  );
  const ProfilePage = () => (
    <Box sx={{ p: 4, textAlign: "center" }}>
      <Typography variant="h4">User Profile</Typography>
      <Typography>Edit your personal details.</Typography>
    </Box>
  );
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={customTheme}>
          <CssBaseline /> {/* Applies a CSS reset for consistent styling */}
        
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/how-it-works" element={<HowItWorksPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />

              {/* Customer Routes */}
              <Route path="/browse-cars" element={<BrowseCarsPage />} />
              <Route path="/my-rentals" element={<MyRentalsPage />} />

              {/* Host Routes */}
              <Route path="/my-cars" element={<MyCarsPage />} />
              <Route path="/list-car" element={<ListCarPage />} />
              <Route path="/bookings" element={<BookingsPage />} />

              {/* Common Logged-in Route */}
              <Route path="/profile" element={<ProfilePage />} />
            </Routes>
       
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
