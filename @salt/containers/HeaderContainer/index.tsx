import { Box, Grid, Typography } from "@mui/material";
import * as React from "react";
import Breadcrumbs from "../../components/BreadCrumbs";
import Divider from "../../components/Divider";
import IconButton from "../../components/IconButton";
import Navbar from "../../components/Navbar";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import Button from "../../components/Button";

export default function HeaderContainer(props: React.PropsWithChildren) {
  const { children } = props;
  const dataBreadcrumbs = [
    "Videos",
    "People",
    "Documents",
    "Events",
    "Communities",
    "Favorites",
    "Channels",
  ];

  return (
    <Box display={"flex"} flexDirection="column" gap={5}>
      <Navbar />
      <Box display={"flex"} flexDirection="column" gap={1}>
        <Divider />
        <Breadcrumbs>
          {dataBreadcrumbs.map((text, index) => (
            <Typography key={index}>{text}</Typography>
          ))}
        </Breadcrumbs>
        <Divider />
      </Box>
      {children}
      <Box display="flex" flexDirection="column" gap={3}>
        <Divider />
        <Grid container spacing={2}>
          <Grid item xs="auto">
            <Button variant="contained" color="secondary">
              <TwitterIcon />
            </Button>
          </Grid>
          <Grid item xs="auto">
            <Button variant="contained" color="secondary">
              <LinkedInIcon />
            </Button>
          </Grid>
          <Grid item xs="auto">
            <Button variant="contained" color="secondary">
              <FacebookIcon />
            </Button>
          </Grid>
        </Grid>
        <Breadcrumbs>
          {dataBreadcrumbs.map((text, index) => (
            <Typography key={index} variant="subtitle2">
              {text}
            </Typography>
          ))}
        </Breadcrumbs>
        <Box>
        <Typography variant="subtitle2" sx={{ color: "secondary.main" }}>
          &#169; Copyright 2013 companyname inc.
        </Typography>
        <Breadcrumbs>
          {["Privacy", "Terms"].map((text, index) => (
            <Typography key={index} variant="subtitle2">
              {text}
            </Typography>
          ))}
        </Breadcrumbs>
        </Box>
      </Box>
    </Box>
  );
}
