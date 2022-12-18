import { Box, Grid, Skeleton, Typography } from "@mui/material";
import * as React from "react";
import Divider from "../../../components/Divider";
import Media from "../../../components/Media";
import TitleMenu from "../../../components/TitleMenu";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";

export default function SectionActivity() {
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
        title="Activity"
        action={{
          label: "View timeline / Filter activities",
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
          <Box
            key={i}
            position="relative"
            sx={{
              cursor: "pointer",
              padding: "5px",
              boxSizing: "unset",
              ":hover": {
                borderWidth: 1,
                borderStyle: "solid",
                borderColor: "secondary.main",
                padding: "4px",
              },
            }}
          >
            <Grid container spacing={2} columns={3}>
              <Grid item xs={1}>
                <Media.Collection sx={{ width: "100%", height: 70 }}>
                  <Skeleton variant="rectangular" width="100%" height={70} />
                </Media.Collection>
              </Grid>
              <Grid item xs={2} sx={{ color: "secondary.main" }}>
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                  height="100%"
                >
                  <Box>
                    <Typography variant="subtitle2" component="span">
                      {name}
                    </Typography>{" "}
                    <Typography variant="caption">{type}</Typography>
                  </Box>
                  <Box>
                    <Typography variant="caption" noWrap display="block">
                      {description}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="caption">
                      <MapsUgcIcon sx={{ fontSize: "0.75rem" }} /> {time}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Box>
              <Box
                position="absolute"
                top={-1}
                right={-1}
                zIndex={1}
                sx={{
                  width: 0,
                  height: 0,
                  borderTop: "0 solid transparent",
                  borderRight: "25px solid",
                  borderRightColor: "secondary.main",
                  borderBottom: "25px solid transparent",
                }}
              />
              <Box
                position="absolute"
                top={-1}
                right={3}
                color="primary.main"
                zIndex={1}
                sx={{ fontSize: 12 }}
              >
                x
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
      <Divider />
    </Box>
  );
}
