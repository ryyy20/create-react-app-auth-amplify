import * as React from "react";
import ProductCategories from "./modules/views/ProductCategories.tsx";
import ProductSmokingHero from "./modules/views/ProductSmokingHero.tsx";
import AppFooter from "./modules/views/AppFooter.tsx";
import ProductHero from "./modules/views/ProductHero.tsx";
import ProductValues from "./modules/views/ProductValues.tsx";
import ProductHowItWorks from "./modules/views/ProductHowItWorks.tsx";
import ProductCTA from "./modules/views/ProductCTA.tsx";
import AppAppBar from "./modules/views/AppAppBar.tsx";
import withRoot from "./modules/withRoot.tsx";
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'

function Index() {
  return (
    <React.Fragment>
      <AmplifySignOut/>
      <AppAppBar />
      <ProductHero />
      <ProductValues />
      {/* <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero /> */}
      {/* <AppFooter /> */}
    </React.Fragment>
  );
}

export default withRoot(Index);
