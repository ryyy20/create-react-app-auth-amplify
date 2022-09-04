import * as React from "react";
import Button from "../components/Button.tsx";
import Typography from "../components/Typography.tsx";
import ProductHeroLayout from "./ProductHeroLayout.tsx";
import { Link as RouterLink } from "react-router-dom";
import force from "./images/force.jpg";
import force2 from "../../../../public/force2.jpg";
import { blue } from "@mui/material/colors";

import { Amplify, Storage } from 'aws-amplify';
import { AmplifyS3Image } from '@aws-amplify/ui-react/legacy';
import awsconfig from '../../../aws-exports';
// import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

//  const backgroundImage = Storage.get('force2.jpg', {expires: 60})
//  .then(result => console.log('storage RESULT -->'+result))
//  .catch(err => console.log('ERRORORORO --> ' +err));
//  const backgroundImage =
  //  "https://geekfitness.net/wp-content/uploads/2016/12/Obi-Wan-Kenobi-Jedi-Meditation-with-a-Fire-Concept-Art.jpg";
  const backgroundImage = "https://geekfitness.net/wp-content/uploads/2016/12/Obi-Wan-Kenobi-Jedi-Meditation-with-a-Fire-Concept-Art.jpg";
  //force2

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
      {/* <AmplifyS3Image imgKey="Dagobah.jpeg" />; */}
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
