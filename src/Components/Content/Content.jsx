import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { ContentWrap } from "./style";
const Content = () => {
  return (
    <ContentWrap>
      <Container fixed>
        <Grid container alignItems="center">
          <Grid item xs={6}>
            <img className="mini-banner" src="images/about.jpg" alt="about" />
          </Grid>
          <Grid item xs={6}>
            <div className="about-us">
              <h2>Learn to earn</h2>
              <p>
                We designed and developed the &chain protocol to solve the
                issues arising from the disruption of the field of employment,
                the ways we work and learn.
              </p>
              <p>
                <strong>
                  We are almost ready to launch! Be the first to know!
                </strong>
              </p>
              <p>
                <strong>Follow-us on Twitter!</strong>
              </p>
            </div>
          </Grid>
        </Grid>
      </Container>
    </ContentWrap>
  );
};
export default Content;
