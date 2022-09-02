import React from "react";
import { Amplify } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from '../aws-exports';
Amplify.configure(awsExports);

export default function App() {
    const [loggedIn, setLoggedIn] = React.useState<boolean>(false);

  // possible states: signIn | signedIn | signedOut
  const handleAuthStateChange = (authState: string) =>{
    authState === 'signedIn' ? setLoggedIn(true) : setLoggedIn(false);
    console.log('SIGNED IN')
  }
    

  return (
    <Authenticator onStateChange={handleAuthStateChange}>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}
// import { Auth } from '@aws-amplify/ui-react';
// import withRoot from './modules/withRoot.tsx'
// async function SignIn(username, password) {
//     try {
//         const user = await Auth.signIn(username, password);
//     } catch (error) {
//         console.log('error signing in', error);
//     }
// }
// export default withRoot(SignIn);
// import * as React from "react";
// import { Field, Form, FormSpy } from "react-final-form";
// import Box from "@mui/material/Box";
// import Link from "@mui/material/Link";
// import Typography from "./modules/components/Typography.tsx";
// import AppFooter from "./modules/views/AppFooter.tsx";
// import AppAppBar from "./modules/views/AppAppBar.tsx";
// import AppForm from "./modules/views/AppForm.tsx";
// import { email, required } from "./modules/form/validation.ts";
// import RFTextField from "./modules/form/RFTextField.tsx";
// import FormButton from "./modules/form/FormButton.tsx";
// import FormFeedback from "./modules/form/FormFeedback.tsx";
// import withRoot from "./modules/withRoot.tsx";
// import { Link as RouterLink } from "react-router-dom";

// function SignIn() {
//   const [sent, setSent] = React.useState(false);

//   const validate = (values: { [index: string]: string }) => {
//     const errors = required(["email", "password"], values);

//     if (!errors.email) {
//       const emailError = email(values.email);
//       if (emailError) {
//         errors.email = emailError;
//       }
//     }

//     return errors;
//   };

//   const handleSubmit = () => {
//     setSent(true);
//   };

//   return (
//     <React.Fragment>
//       <AppAppBar />
//       <AppForm>
//         <React.Fragment>
//           <Typography variant="h3" gutterBottom marked="center" align="center">
//             Sign In
//           </Typography>
//           <Typography variant="body2" align="center">
//             {"Not a member yet? "}
//             <Link
//               component={RouterLink}
//               to="/sign-up/"
//               align="center"
//               underline="always"
//             >
//               Sign Up here
//             </Link>
//           </Typography>
//         </React.Fragment>
//         <Form
//           onSubmit={handleSubmit}
//           subscription={{ submitting: true }}
//           validate={validate}
//         >
//           {({ handleSubmit: handleSubmit2, submitting }) => (
//             <Box
//               component="form"
//               onSubmit={handleSubmit2}
//               noValidate
//               sx={{ mt: 6 }}
//             >
//               <Field
//                 autoComplete="email"
//                 autoFocus
//                 component={RFTextField}
//                 disabled={submitting || sent}
//                 fullWidth
//                 label="Email"
//                 margin="normal"
//                 name="email"
//                 required
//                 size="large"
//               />
//               <Field
//                 fullWidth
//                 size="large"
//                 component={RFTextField}
//                 disabled={submitting || sent}
//                 required
//                 name="password"
//                 autoComplete="current-password"
//                 label="Password"
//                 type="password"
//                 margin="normal"
//               />
//               <FormSpy subscription={{ submitError: true }}>
//                 {({ submitError }) =>
//                   submitError ? (
//                     <FormFeedback error sx={{ mt: 2 }}>
//                       {submitError}
//                     </FormFeedback>
//                   ) : null
//                 }
//               </FormSpy>
//               <FormButton
//                 sx={{ mt: 3, mb: 2 }}
//                 disabled={submitting || sent}
//                 size="large"
//                 color="secondary"
//                 fullWidth
//               >
//                 {submitting || sent ? "In progress…" : "Sign In"}
//               </FormButton>
//             </Box>
//           )}
//         </Form>
//         <Typography align="center">
//           <Link
//             underline="always"
//             component={RouterLink}
//             to="/forgot-password/"
//           >
//             Forgot password?
//           </Link>
//         </Typography>
//       </AppForm>
//       <AppFooter />
//     </React.Fragment>
//   );
// }

// export default withRoot(SignIn);
