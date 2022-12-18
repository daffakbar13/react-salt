import { Box, CardActionArea, Grid, Skeleton, Typography } from "@mui/material";
import * as React from "react";
import Divider from "../../../components/Divider";
import Media from "../../../components/Media";
import TitleMenu from "../../../components/TitleMenu";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";

export default function SectionChannels() {
  const [height, setHeight] = React.useState(0);
  const data: any[] = [];
  for (let i = 0; i < 20; i++) {
    data.push({
      name: "John Stainior",
      type: "commented",
      description: "Well, Im liking it how it captures the audio",
      time: "2 seconds ago",
    });
  }

  React.useEffect(() => {
    const interval = setInterval(() => {
      const getWidth = document.getElementById("channel-content")?.clientWidth;
      if (getWidth && getWidth !== height) {
        setHeight((getWidth * 80) / 100);
      }
    }, 1);

    return () => clearInterval(interval);
  }, []);

  console.log(height);
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
              <Media.Collection
                sx={{ width: "100%", height }}
                id="channel-content"
              >
                <CardActionArea>
                  <Skeleton
                    variant="rectangular"
                    width="100%"
                    height={height}
                  />
                  <Media.Description>
                    <Typography variant="subtitle2">{name}</Typography>
                  </Media.Description>
                </CardActionArea>
              </Media.Collection>
            </Grid>
            <Grid item xs={1}>
              <Media.Collection sx={{ width: "100%", height }}>
                <CardActionArea>
                  <Skeleton
                    variant="rectangular"
                    width="100%"
                    height={height}
                  />
                  <Media.Description>
                    <Typography variant="subtitle2">{name}</Typography>
                  </Media.Description>
                </CardActionArea>
              </Media.Collection>
            </Grid>
          </Grid>
        ))}
      </Box>
      <Divider />
    </Box>
  );
}
