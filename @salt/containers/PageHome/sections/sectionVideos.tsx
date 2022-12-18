import {
  Box,
  CardActionArea,
  CardContent,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import * as React from "react";
import Media from "../../../components/Media";

export default function SectionVideos() {
  const data: string[] = [];
  for (let i = 0; i < 5; i++) {
    data.push("test");
  }
  const [bigMedia] = data;
  const rightSection = data.slice(1, 3);
  const bottomSection = data.slice(3, 5);

  return (
    <Grid container spacing={1} columns={3}>
      <Grid item xs md={2}>
        <Box
          display={"flex"}
          justifyContent="space-between"
          sx={{ color: "secondary.main" }}
        >
          <Typography variant="h5">Videos</Typography>
          <Box display={"flex"} flexDirection="column-reverse">
            <Typography variant="subtitle2" sx={{ cursor: "pointer" }}>
              Browse all videos
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={3} container spacing={1} columns={3}>
        <Grid item xs={3} md={2}>
          <Media.Collection sx={{ width: "100%", height: "100%" }}>
            <CardActionArea>
              <Skeleton variant="rectangular" width="100%" height={408} />
              <Media.Description>
                <Skeleton width="100%" height={30} />
                <Skeleton width="100%" height={20} />
                <Skeleton width="80%" height={20} />
              </Media.Description>
            </CardActionArea>
          </Media.Collection>
        </Grid>
        <Grid item xs={3} md={1}>
          <Grid container spacing={1} columns={1}>
            {rightSection.map((_, i) => (
              <Grid key={i} item xs={1}>
                <Media.Collection sx={{ width: "100%", height: 200 }}>
                  <CardActionArea>
                    <Skeleton variant="rectangular" width="100%" height={200} />
                    <Media.Description>
                      <Skeleton width="100%" height={30} />
                      <Skeleton width="100%" height={20} />
                      <Skeleton width="80%" height={20} />
                    </Media.Description>
                  </CardActionArea>
                </Media.Collection>
              </Grid>
            ))}
          </Grid>
        </Grid>
        {bottomSection.map((_, i) => (
          <Grid key={i} item xs={3} md>
            <Media.Collection sx={{ width: "100%", height: 200 }}>
              <CardActionArea>
                <Skeleton variant="rectangular" width="100%" height={200} />
                <Media.Description>
                  <Skeleton width="100%" height={30} />
                  <Skeleton width="100%" height={20} />
                  <Skeleton width="80%" height={20} />
                </Media.Description>
              </CardActionArea>
            </Media.Collection>
          </Grid>
        ))}
        <Grid item xs={3} md>
          <Media.MoreAction sx={{ width: "100%", height: 200 }}>
            <CardActionArea>asd</CardActionArea>
          </Media.MoreAction>
        </Grid>
      </Grid>
    </Grid>
  );
}
