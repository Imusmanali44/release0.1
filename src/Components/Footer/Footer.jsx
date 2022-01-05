import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FooterWrap } from "./style";
const Footer = () => {
  return (
    <FooterWrap>
      <Container fixed>
        <Grid container alignItems="center">
          <Grid item xs={12}>
            <h3>Reshaping the way we work, learn and live</h3>
          </Grid>
          <Grid item xs={12}>
            <div className="social-media">
              <div className="social-img">
                <a href="https://twitter.com/LillupWorkplace">
                  <img
                    alt="Twitter icon"
                    src="https://eep.io/mc-cdn-images/icons/social-block-v2/light-twitter-48.png"
                  />
                </a>
              </div>
              <div className="social-img">
                <a href="/">
                  <img
                    alt="Email icon"
                    src="https://eep.io/mc-cdn-images/icons/social-block-v2/light-email-48.png"
                  />
                </a>
              </div>
            </div>
          </Grid>
        </Grid>
        <div className="sub-footer">
          <Grid container alignItems="center">
            <Grid item xs={6}>
              <p>© 2022 LILLUP</p>
            </Grid>
            <Grid item xs={6}></Grid>
          </Grid>
        </div>
      </Container>
    </FooterWrap>
  );
};
export default Footer;
