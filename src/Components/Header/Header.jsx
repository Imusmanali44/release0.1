import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { HeaderWrap } from "./style";
const Content = () => {
  return (
    <HeaderWrap>
      <Container fixed>
        <Grid container alignItems="center">
          <Grid item xs={6} align="center">
            <img className="logo" src="images/lillup.png" alt="Lillup" />
          </Grid>
          <Grid item xs={6}></Grid>
        </Grid>
      </Container>
    </HeaderWrap>
  );
};
export default Content;
