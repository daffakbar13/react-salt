import { Box, Grid } from "@mui/material";
import * as React from "react";
import { SectionActivity, SectionVideos } from "./sections";

export default function PageHome() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={8}>
        <Box display={"flex"} flexDirection="column" gap={2}>
          <SectionVideos />
          <SectionVideos />
          <SectionVideos />
        </Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box display={"flex"} flexDirection="column" gap={2}>
          <SectionActivity />
        </Box>
      </Grid>
    </Grid>
  );
}
