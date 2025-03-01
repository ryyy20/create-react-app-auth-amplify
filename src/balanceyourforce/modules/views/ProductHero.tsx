import React , { useState, useEffect } from "react";
import Button from "../components/Button.tsx";
import Typography from "../components/Typography.tsx";
import ProductHeroLayout from "./ProductHeroLayout.tsx";
import { Link as RouterLink } from "react-router-dom";
import force from "./images/force.jpg";
import force2 from "../../../../public/force2.jpg";
import { blue } from "@mui/material/colors";

import { Amplify, Storage, Auth } from 'aws-amplify';
import awsconfig from '../../../aws-exports';


export default function ProductHero() {
  const [background, setBackground] = useState('')

  useEffect(() =>{
    async function getpics() {
     await getPictures()
    }
    getpics()
  }, [])
  
    async function getPictures(){
       await Storage.get('obiwan.jpg', {expires: 60})
       .then(result => {
        // meditate = result
        setBackground(result)
      })
      .catch(err => console.log(err));
       
    }
  return (
    
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${background})`,
       //backgroundColor: "#7fc7d9", // Average color of the background image.
        backgroundPosition: "center",
      }}
    >
      {/* Increase the network loading priority of the background image. */}
     <img
        style={{ display: "none",width: 100 }}
        src={background}
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
