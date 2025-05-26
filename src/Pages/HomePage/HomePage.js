import React, { useRef, useState } from "react";
import home from "../../assets/images/home-bg.jpg";
import cars from "../../assets/images/car-collage.jpg";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import "./HomePage.css";
import { carMakes, locations } from "./HomePage.const";

function HomePage() {
  const [location, setLocation] = useState("");
  const [fromDate, setFromDate] = useState(dayjs("2025-05-25")); // Default to 25/05/2025 as per image
  const [toDate, setToDate] = useState(dayjs("2025-05-28")); // Default to 28/05/2025 as per image
  const [time, setTime] = useState(dayjs().set("hour", 10).set("minute", 0));
    const makeScrollContainerRef = useRef(null);
    const destScrollContainerRef = useRef(null);
  const scrollAmount = 1032; // Adjust scroll distance per click
  const makes = carMakes;
  const destinations = locations;

  const scrollLeft = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleSearch = () => {
    console.log({
      location: location,
      fromDate: fromDate ? fromDate.format("YYYY-MM-DD") : null,
      toDate: toDate ? toDate.format("YYYY-MM-DD") : null,
      time: time ? time.format("HH:mm") : null,
    });
    alert("Searching for cars!");
  };
  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "400px", // Adjust height as needed
          backgroundImage: `url(${home})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex", // Vertically center the search bar
          justifyContent: "center", // Horizontally center the search bar
          color: "white",
          textAlign: "center",
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Stack
            direction="row" // Always row for desktop
            spacing={0.5} // Minimal spacing between visually distinct input sections
            sx={{
              backgroundColor: "white",
              borderRadius: 10, // Highly rounded corners
              padding: 1, // Padding inside the main container
              boxShadow: 3,
              minWidth: "60%", // Ensure it takes up a good portion of the width
              maxWidth: "1000px", // Max width to prevent it from getting too wide
              height: "64px", // Fixed height as per the example
              overflow: "hidden", // Hide any overflow due to rounding
              display: "flex", // Ensure flex for inner alignment
              flexWrap: "nowrap", // Prevent wrapping on smaller screens if possible
              color: "text.primary", // Ensure text inside is black
              marginTop: "2%",
            }}
          >
            {/* Where Input */}
            <Box
              sx={{
                flexGrow: 1, // Takes up remaining space
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start", // Align text to left
                paddingLeft: 2,
                minWidth: "250px", // Minimum width for location input
              }}
            >
              <Typography
                variant="caption"
                sx={{ color: "text.secondary", lineHeight: 1 }}
              >
                Where
              </Typography>
              <TextField
                variant="standard" // No border, just underline
                placeholder="City, airport, address or hotel" //
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                fullWidth
                InputProps={{
                  disableUnderline: true, // Remove the underline
                  startAdornment: (
                    <LocationOnIcon sx={{ mr: 1, color: "text.secondary" }} />
                  ),
                  sx: { mt: -0.5 }, // Adjust vertical alignment
                }}
                sx={{
                  "& .MuiInputBase-input::placeholder": {
                    opacity: 1, // Ensure placeholder is visible
                    color: "text.primary",
                  },
                }}
              />
            </Box>

            {/* Separator Line */}
            <Box
              sx={{
                width: "1px",
                height: "80%",
                backgroundColor: "divider",
                mx: 1,
              }}
            />

            {/* From Date and Time */}
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                paddingX: 1,
                minWidth: "300px", // Adjust width for date/time
              }}
            >
              <Typography
                variant="caption"
                sx={{ color: "text.secondary", lineHeight: 1 }}
              >
                From
              </Typography>
              <Stack direction="row" spacing={3} alignItems="center">
                <DatePicker
                  value={fromDate}
                  onChange={(newValue) => setFromDate(newValue)}
                  format="DD/MM/YYYY" //
                  slotProps={{
                    textField: {
                      variant: "standard",
                      InputProps: { disableUnderline: true },
                      sx: {
                        width: "140px",
                        "& .MuiInputBase-input": {
                          padding: "0",
                          height: "unset",
                        },
                      },
                    },
                    openPickerButton: {
                      sx: { p: "0", "& svg": { fontSize: "1.2rem" } },
                    },
                  }}
                />

                <TimePicker
                  value={time}
                  onChange={(newValue) => setTime(newValue)}
                  format="HH:mm" //
                  slotProps={{
                    textField: {
                      variant: "standard",
                      InputProps: { disableUnderline: true },
                      sx: {
                        width: "80px",
                        "& .MuiInputBase-input": {
                          padding: "0",
                          height: "unset",
                        },
                      },
                    },
                    openPickerButton: {
                      sx: { p: "0", "& svg": { fontSize: "1.2rem" } },
                    },
                    sx: { mt: "5%" }, // Adjust vertical alignment
                  }}
                />
              </Stack>
            </Box>

            {/* Separator Line */}
            <Box
              sx={{
                width: "1px",
                height: "80%",
                backgroundColor: "divider",
                mx: 1,
              }}
            />

            {/* Until Date and Time */}
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                paddingX: 1,
                minWidth: "300px", // Adjust width for date/time
              }}
            >
              <Typography
                variant="caption"
                sx={{ color: "text.secondary", lineHeight: 1 }}
              >
                Until
              </Typography>
              <Stack direction="row" spacing={3} alignItems="center">
                <DatePicker
                  value={toDate}
                  onChange={(newValue) => setToDate(newValue)}
                  format="DD/MM/YYYY" //
                  slotProps={{
                    textField: {
                      variant: "standard",
                      InputProps: { disableUnderline: true },
                      sx: {
                        width: "140px",
                        "& .MuiInputBase-input": {
                          padding: "0",
                          height: "unset",
                        },
                      },
                    },
                    openPickerButton: {
                      sx: { p: "0", "& svg": { fontSize: "1.2rem" } },
                    },
                  }}
                />

                <TimePicker
                  value={time} // Re-using the same time state for simplicity, adjust if different "until" time needed
                  onChange={(newValue) => setTime(newValue)}
                  format="HH:mm" //
                  slotProps={{
                    textField: {
                      variant: "standard",
                      InputProps: { disableUnderline: true },
                      sx: {
                        width: "80px",
                        "& .MuiInputBase-input": {
                          padding: "0",
                          height: "unset",
                        },
                      },
                    },
                    openPickerButton: {
                      sx: { p: "0", "& svg": { fontSize: "1.2rem" } },
                    },
                  }}
                />
              </Stack>
            </Box>

            {/* Search Button */}
            <IconButton
              size="large"
              onClick={handleSearch}
              sx={{
                backgroundColor: "#593CFB;", // A purple color
                color: "white",
                borderRadius: "50%", // Make it round
                width: 48, // Fixed width
                height: 48, // Fixed height
                boxShadow: "none",
                ml: 1, // Margin left to separate from inputs
                "&:hover": {
                  backgroundColor: "lightgray", // Darker purple on hover
                },
              }}
            >
              <SearchIcon />
            </IconButton>
          </Stack>
        </LocalizationProvider>
      </Box>
      <div>
        <Typography
          sx={{
            fontFamily: "RlFreight, HoeflerText-Black, Times New Roman, serif",
            marginTop: "40px",
            fontSize: "68px",
            fontWeight: 900,
            letterSpacing: "1px",
            lineHeight: "72px",
            textTransform: "none",
            textAlign: "center",
          }}
        >
          Skip the rental car counter
        </Typography>
        <Typography
          sx={{
            fontFamily:
              "RlBasisGrotesque, Avenir, Helvetica Neue, Helvetica, sans-serif",
            fontWeight: 500,
            letterSpacing: "-0.2px",
            lineHeight: "28px",
            textTransform: "none",
            fontSize: "21px",
            textAlign: "center",
          }}
        >
          Rent just about any car, just about anywhere
        </Typography>
      </div>

      <div className="cars-collage">
        <Stack direction="row" spacing={3} alignItems="center" display={"flex"}>
          <div>
            <img
              src={cars}
              alt="Car Collage"
              style={{
                height: "250px",
                width: "950px",
                objectFit: "cover",
                marginRight: "100px",
              }}
            />
          </div>
          <div>
            <Typography
              sx={{
                fontFamily:
                  "RlBasisGrotesque, Avenir, Helvetica Neue, Helvetica, sans-serif",
                fontWeight: 900,
                letterSpacing: "-0.2px",
                lineHeight: "32px",
                textTransform: "none",
                fontSize: "28px",
                textAlign: "left",
                marginBottom: "12px",
              }}
            >
              Rent cars for any occassion
            </Typography>
            <Typography
              sx={{
                fontFamily:
                  "RlBasisGrotesque, Avenir, Helvetica Neue, Helvetica, sans-serif",
                fontWeight: 400,
                letterSpacing: "-0.2px",
                marginBottom: "32px",
                textTransform: "none",
                fontSize: "16px",
                textAlign: "left",
              }}
            >
              Browse an incredible selection of cars, from the everyday to the
              extraordinary.
            </Typography>
            <Button
              sx={{
                display: "inline-block",
                backgroundColor: " #593CFB",
                border: "1px solid #593CFB",
                borderRadius: "8px",
                color: "#FFFFFF",
                fontSize: "18px",
                height: "50px",
                padding: "0px 20px",
                textTransform: "none",
                lineHeight: "49px",
                fontWeight: "bold",
              }}
            >
              Explore Cars
            </Button>
          </div>
        </Stack>
      </div>

      <div className="by-make">
        <Box sx={{ bgcolor: "background.default", maxWidth: "1032px" }}>
          {" "}
          {/* Use default background color for the section */}
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            mb={3}
          >
            <Typography variant="h5" component="h2" fontWeight="bold">
              Browse by make
            </Typography>
            <Box>
              <IconButton
                onClick={() => scrollLeft(makeScrollContainerRef)}
                sx={{ mr: 1, border: "1px solid #e0e0e0", borderRadius: "50%" }}
              >
                <ArrowBackIosNewIcon sx={{ fontSize: "1rem" }} />
              </IconButton>
              <IconButton
                              onClick={() => scrollRight(makeScrollContainerRef)}
                sx={{ border: "1px solid #e0e0e0", borderRadius: "50%" }}
              >
                <ArrowForwardIosIcon sx={{ fontSize: "1rem" }} />
              </IconButton>
            </Box>
          </Stack>
          {/* Scrollable Container for Car Make Cards */}
          <Box
            ref={makeScrollContainerRef}
            sx={{
              display: "flex",
              overflowX: "auto", // Enable horizontal scrolling
              scrollSnapType: "x mandatory", // Optional: for snapping to cards
              scrollBehavior: "smooth", // Smooth scrolling on arrow click
              pb: 2, // Padding at bottom for potential scrollbar space
              "&::-webkit-scrollbar": {
                // Hide scrollbar for Webkit browsers
                display: "none",
              },
              msOverflowStyle: "none", // Hide scrollbar for IE/Edge
              scrollbarWidth: "none", // Hide scrollbar for Firefox
              gap: 2, // Space between cards
            }}
          >
            {makes.map((make) => (
              <Card
                key={make.id}
                sx={{
                  flexShrink: 0, // Prevent cards from shrinking
                  width: 190, // Fixed width for each card
                  borderRadius: 2, // Rounded corners for the card
                  boxShadow: 3, // Add shadow similar to the image
                  textAlign: "center",
                  cursor: "pointer",
                  "&:hover": {
                    boxShadow: 6, // Enhance shadow on hover
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="150"
                  image={make.image}
                  alt={make.name}
                  sx={{
                    objectFit: "cover", // Cover the area, crop if necessary
                    borderTopLeftRadius: 2, // Match card border radius
                    borderTopRightRadius: 2,
                  }}
                />
                <CardContent
                  sx={{ py: 1.5, px: 1, "&:last-child": { pb: 1.5 } }}
                >
                  {" "}
                  {/* Adjust padding */}
                  <Typography variant="subtitle1" fontWeight="bold">
                    {make.name}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      </div>

      <div className="by-location">
        <Box sx={{ bgcolor: "background.default", maxWidth: "1032px" }}>
          {" "}
          {/* Use default background color for the section */}
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            mb={3}
          >
            <Typography variant="h5" component="h2" fontWeight="bold">
              Browse by destination
            </Typography>
            <Box>
              <IconButton
                onClick={() => scrollLeft(destScrollContainerRef)}
                sx={{ mr: 1, border: "1px solid #e0e0e0", borderRadius: "50%" }}
              >
                <ArrowBackIosNewIcon sx={{ fontSize: "1rem" }} />
              </IconButton>
              <IconButton
                onClick={() => scrollRight(destScrollContainerRef)}
                sx={{ border: "1px solid #e0e0e0", borderRadius: "50%" }}
              >
                <ArrowForwardIosIcon sx={{ fontSize: "1rem" }} />
              </IconButton>
            </Box>
          </Stack>
          {/* Scrollable Container for Car Make Cards */}
          <Box
            ref={destScrollContainerRef}
            sx={{
              display: "flex",
              overflowX: "auto", // Enable horizontal scrolling
              scrollSnapType: "x mandatory", // Optional: for snapping to cards
              scrollBehavior: "smooth", // Smooth scrolling on arrow click
              pb: 2, // Padding at bottom for potential scrollbar space
              "&::-webkit-scrollbar": {
                // Hide scrollbar for Webkit browsers
                display: "none",
              },
              msOverflowStyle: "none", // Hide scrollbar for IE/Edge
              scrollbarWidth: "none", // Hide scrollbar for Firefox
              gap: 2, // Space between cards
            }}
          >
            {destinations.map((make) => (
              <Card
                key={make.id}
                sx={{
                  flexShrink: 0, // Prevent cards from shrinking
                  width: 156, // Fixed width for each card
                  height: 190, // Fixed height for each card
                  borderRadius: "8px", // Rounded corners for the card
                  textAlign: "center",
                  cursor: "pointer",
                  padding: "16px 16px", // Remove default padding
                  "&:hover": {
                    boxShadow: 6, // Enhance shadow on hover
                  },
                  border: "1px solid #E7E7E8",
                  "&:hover": {
                    boxShadow: 6,
                    "& .default-image": {
                      // Hide default image on hover
                      opacity: 0,
                      visibility: "hidden",
                    },
                    "& .hover-image": {
                      // Show hover image on hover
                      opacity: 1,
                      visibility: "visible",
                    },
                  },
                }}
              >
                <Box
                  sx={{ position: "relative", width: "100%", height: "120px" }}
                >
                  <CardMedia
                    component="img"
                    className="default-image"
                    image={make.defaultImage}
                    alt={make.name}
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      objectFit: "cover",
                      // Cover the area, crop if necessary
                      borderTopLeftRadius: 2, // Match card border radius
                      borderTopRightRadius: 2,
                      transition:
                        "opacity 0.3s ease-in-out, visibility 0.3s ease-in-out", // Smooth transition
                      opacity: 1,
                      visibility: "visible",
                    }}
                  />

                  <CardMedia
                    component="img"
                    className="hover-image"
                    image={make.hoverImage}
                    alt={make.name}
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      objectFit: "cover",
                      // Cover the area, crop if necessary
                      borderTopLeftRadius: 2, // Match card border radius
                      borderTopRightRadius: 2,
                      transition:
                        "opacity 0.3s ease-in-out, visibility 0.3s ease-in-out", // Smooth transition
                      opacity: 0, // Initially hidden
                      visibility: "hidden", // Initially hidden
                    }}
                  />
                </Box>
                <CardContent
                  sx={{ py: 1.5, px: 1, "&:last-child": { pb: 1.5 } }}
                >
                  {" "}
                  {/* Adjust padding */}
                  <Typography variant="subtitle1" fontWeight="bold">
                    {make.name}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      </div>
    </>
  );
}
export default HomePage;
