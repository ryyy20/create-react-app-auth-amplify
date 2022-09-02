import { Amplify } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from '../aws-exports';

Amplify.configure(awsExports);

export default function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1> <p>Thank you for Visiting.</p>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}
//add to retest
// import * as React from "react";
// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
// import Link from "@mui/material/Link";
// import { Field, Form, FormSpy } from "react-final-form";
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

// function SignUp() {
//   const [sent, setSent] = React.useState(false);

//   const validate = (values: { [index: string]: string }) => {
//     const errors = required(
//       ["firstName", "lastName", "email", "password"],
//       values
//     );

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
//             Sign Up
//           </Typography>
//           <Typography variant="body2" align="center">
//             <Link component={RouterLink} to="/sign-in/" underline="always">
//               Already have an account?
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
//               <Grid container spacing={2}>
//                 <Grid item xs={12} sm={6}>
//                   <Field
//                     autoFocus
//                     component={RFTextField}
//                     disabled={submitting || sent}
//                     autoComplete="given-name"
//                     fullWidth
//                     label="First name"
//                     name="firstName"
//                     required
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <Field
//                     component={RFTextField}
//                     disabled={submitting || sent}
//                     autoComplete="family-name"
//                     fullWidth
//                     label="Last name"
//                     name="lastName"
//                     required
//                   />
//                 </Grid>
//               </Grid>
//               <Field
//                 autoComplete="email"
//                 component={RFTextField}
//                 disabled={submitting || sent}
//                 fullWidth
//                 label="Email"
//                 margin="normal"
//                 name="email"
//                 required
//               />
//               <Field
//                 fullWidth
//                 component={RFTextField}
//                 disabled={submitting || sent}
//                 required
//                 name="password"
//                 autoComplete="new-password"
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
//                 color="secondary"
//                 fullWidth
//               >
//                 {submitting || sent ? "In progress…" : "Sign Up"}
//               </FormButton>
//             </Box>
//           )}
//         </Form>
//       </AppForm>
//       <AppFooter />
//     </React.Fragment>
//   );
// }

// export default withRoot(SignUp);
