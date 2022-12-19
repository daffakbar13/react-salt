import { Box, Grid } from "@mui/material";
import * as React from "react";
import {
  SectionActivity,
  SectionChannels,
  SectionDocuments,
  SectionPeople,
  SectionVideos,
} from "./sections";
// import HomeProvider from "./_provider";

export default function PageHome() {
  return (
    // <HomeProvider>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Box display={"flex"} flexDirection="column" gap={5}>
            <SectionVideos />
            <SectionPeople />
            <SectionDocuments />
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box display={"flex"} flexDirection="column" gap={5}>
            <SectionActivity />
            <SectionChannels />
          </Box>
        </Grid>
      </Grid>
    // </HomeProvider>
  );
}
