import * as React from "react";
import Grid from "../shared/Grid";
import ContentFrame from "../shared/ContentFrame";
import Banner from "../shared/Banner";
import Summary from "../shared/Summary";
import BodyContent from "../shared/BodyContent";

const About = () => (
  <Grid>
    <Banner>About</Banner>
    <ContentFrame>
      <BodyContent>
        <Summary>
          Rote Practice with data visualizations.
        </Summary>
      </BodyContent>



    </ContentFrame>
  </Grid>
);

export default About;
