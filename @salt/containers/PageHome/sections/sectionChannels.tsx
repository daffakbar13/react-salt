import { Box, Grid, Skeleton, Typography } from "@mui/material";
import * as React from "react";
import Divider from "../../../components/Divider";
import Media from "../../../components/Media";
import TitleMenu from "../../../components/TitleMenu";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";

export default function SectionChannels() {
  const data: any[] = [];
  for (let i = 0; i < 20; i++) {
    data.push({
      name: "John Stainior",
      type: "commented",
      description: "Well, Im liking it how it captures the audio",
      time: "2 seconds ago",
    });
  }
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={1}
      height={656}
      borderBottom="1px solid secondary.main"
    >
      <TitleMenu
        title="Channels"
        action={{
          label: "Browse all channels",
          path: "/",
        }}
      />
      <Divider />
      <Box
        display="flex"
        flexDirection="column"
        gap={1}
        height="100%"
        overflow="scroll"
      >
        {data.map(({ name, type, description, time }, i) => (
          <Grid key={i} container spacing={1} columns={2}>
            <Grid item xs={1}>
              <Media.Collection sx={{ width: "100%", height: 100 }}>
                <Skeleton variant="rectangular" width="100%" height={100} />
              </Media.Collection>
            </Grid>
            <Grid item xs={1}>
              <Media.Collection sx={{ width: "100%", height: 100 }}>
                <Skeleton variant="rectangular" width="100%" height={100} />
              </Media.Collection>
            </Grid>
          </Grid>
        ))}
      </Box>
      <Divider />
    </Box>
  );
}
