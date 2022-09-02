import * as React from "react";
import Button from "../components/Button.tsx";
import Typography from "../components/Typography.tsx";
import ProductHeroLayout from "./ProductHeroLayout.tsx";
import { Link as RouterLink } from "react-router-dom";
import force from "./images/force.jpg";
import force2 from "./images/force2.jpg";
import { blue } from "@mui/material/colors";
const backgroundImage =
force2;
// const backgroundImage =
//   "https://images.unsplash.com/photo-1534854638093-bada1813ca19?auto=format&fit=crop&w=1400&q=80";

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
       //backgroundColor: "#7fc7d9", // Average color of the background image.
        backgroundPosition: "center",
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Balance your Force
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >Welcome to the meditation chambers. Come in to heal your force energy.
      </Typography>
      <Button
         variant='outlined'
         sx={{ minWidth: 200, color: 'yellow', backgroundColor: 'orange', borderColor: 'green' }}
        size="large"
        component={RouterLink}
        to="/sign-up/"
      >
        Enter Chamber Now
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Discover the experience below
      </Typography>
    </ProductHeroLayout>
  );
}
