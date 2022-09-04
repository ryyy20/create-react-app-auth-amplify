import * as React from "react";
import { Theme } from "@mui/material/styles";
import { SxProps } from "@mui/system";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "../components/Typography.tsx";

// import meditate from "../../../../public/meditate.jpeg";
// import bog from "../../../../public/DragonsnakeBog.jpeg";
// import dagobah from "../../../../public/Dagobah.jpeg";
// import illum from "../../../../public/illum.jpeg";
// import kyber from "../../../../public/kyber.jpeg";

// import { Amplify, Storage, Auth } from 'aws-amplify';
import awsconfig from '../../../aws-exports';
// Auth.configure(awsconfig)
// Auth.configure({ mandatorySignIn: false});
// Amplify.configure(awsconfig);
// Storage.configure(awsconfig);
// import { Storage } from "@aws-amplify/storage"

// await Storage.get('test.txt', { 
//     level: 'public'
// });
// import { Storage } from "@aws-amplify/storage"

// await Storage.get('test.txt', { 
//     level: 'private'
// });
import { Storage } from "@aws-amplify/storage"
Storage.configure(awsconfig);
// await Storage.get('test.txt', { 
//     level: 'public'
// });


const item: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  px: 5,
};
var meditate;
var bog;
var dagobah;
var illum;
var kyber;

 function ProductValues() {
  
  React.useEffect(() =>{
    async function getpics() {
     await getPictures()
    }
    getpics()
  }, [])

  async function getPictures(){
     meditate = await Storage.get('meditate.jpeg')
     .then(result => console.log(result))
    .catch(err => console.log(err));
   console.log(Storage)
     bog = await Storage.get('bog.jpeg', {level:'private',expires: 60})
    .then(result => console.log(result))
    .catch(err => console.log(err));
     dagobah = await Storage.get('Dagobah.jpeg', {level:'private',expires: 60})
    .then(result => console.log(result))
    .catch(err => console.log(err));
     illum = await Storage.get('illum.jpeg', {level:'private',expires: 60})
    .then(result => console.log(result))
    .catch(err => console.log(err));
     kyber = await Storage.get('kyber.jpeg', {level:'private',expires: 60})
    .then(result => console.log(result))
    .catch(err => console.log(err));

    console.log("meditate --> ", meditate)
    console.log("bog --> ", bog)
    console.log("dagobah --> ", dagobah)
    console.log("illum --> ", illum)
    console.log("kyber --> ", kyber)
   
  }
  return (
    <Box
      component="section"
      sx={{ display: "flex", overflow: "hidden", bgcolor: "secondary.light" }}
    >
      <Container sx={{ mt: 15, mb: 30, display: "flex", position: "relative" }}>
        <Box
          component="img"
          src="/productCurvyLines.png"
          alt="curvy lines"
          sx={{ pointerEvents: "none", position: "absolute", top: -180 }}
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <img></img>
              <Box
                component="img"
                src={meditate}
                alt="suitcase"
                sx={{ width: 200 }}
                
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Mediate with Jedi Masters
              </Typography>
              <Typography variant="h5">
                {
                  "Come for a meditation session with the best Jedi Masters in the galaxy."
                }
                {
                  " Stay for as long as needed for the force to heal."
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src={dagobah}
                alt="graph"
                sx={{ width: 225 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Choose your Surroundings
              </Typography>
              <Typography variant="h5">
                {
                  "From the halls of the Jedi temple, to Yodas remote swamp on dagobah "
                }
                {"you can choose your meditation chamber from popular Star Wars worlds."}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src={kyber}
                alt="clock"
                sx={{ height: 125 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Customize your Lightsaber
              </Typography>
              <Typography variant="h5">
                {"What Kyber Crystal will you choose?"}
                {" Choose your crystal and lightsaber hilt and build your personal lightsaber. Will you choose the powerful Light or will Darkness beckon?"}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;
