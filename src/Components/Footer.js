import React from "react";
import { styled } from "@mui/system";
import { Container, Grid, Typography, IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import logo from "../Images/logo.png";

const FooterContainer = styled("footer")({
  color: "black",
  marginTop: "auto",
  elevation: 4,
  padding: "20px",
  boxShadow: "0px -5px 15px rgba(0, 0, 0, 0.5)",
});

const LogoContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Logo = styled("img")({
  width: 50,
  height: "auto",
});

const LinksContainer = styled("div")({
  textAlign: "right",
  display: "flex",
  flexDirection: "column",
  color: "inherit",
});

const SocialMediaContainer = styled("div")({
  textAlign: "center",
  marginTop: "16px",
});

const SocialMediaIcon = styled(IconButton)({
  color: "black",
  margin: "8px",
});

const linkStyles = {
  textDecoration: "none",
  color: "inherit",
  cursor: "pointer",
};

const Footer = () => {
  const navigate = useNavigate();

  const handleTypographyClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <LogoContainer>
              <Logo src={logo} alt="Logo" />
            </LogoContainer>
            <Typography variant="h5">Google Developer Students Club</Typography>
            <Typography variant="h6">
              Symbiosis Institute of Technology, Pune
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={8} lg={6}>
            <LinksContainer>
              <Typography
                variant="h6"
                component={RouterLink}
                to="/"
                onClick={() => handleTypographyClick("/")}
                style={linkStyles}
              >
                Home
              </Typography>
              <Typography
                variant="h6"
                component={RouterLink}
                to="/events"
                onClick={() => handleTypographyClick("/events")}
                style={linkStyles}
              >
                Events
              </Typography>
              <Typography
                variant="h6"
                component={RouterLink}
                to="/team"
                onClick={() => handleTypographyClick("/team")}
                style={linkStyles}
              >
                Team
              </Typography>
            </LinksContainer>
          </Grid>
        </Grid>

        <SocialMediaContainer>
          <SocialMediaIcon href="https://www.instagram.com/gdsc_sit/">
            <InstagramIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href="https://www.linkedin.com/company/gdsc-sit-pune/mycompany/">
            <LinkedInIcon />
          </SocialMediaIcon>
        </SocialMediaContainer>

        <Typography variant="body2" align="center">
          Or mail us at <br />
        </Typography>
        <Typography variant="body1" align="center">
          gdsc@sitpune.edu.in
        </Typography>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
