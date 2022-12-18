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
  return (
    <Grid container spacing={1} columns={3}>
      <Grid item xs md={2}>
        <Box display={"flex"} justifyContent="space-between">
          <div>Videos</div>
          <div>Browse all videos</div>
        </Box>
      </Grid>
      <Grid item xs={3} container spacing={1} columns={3}>
        <Grid item xs={3} md={2}>
          <Media.Collection sx={{ width: "100%", height: "100%" }}>
            <CardActionArea>
              <Skeleton variant="rectangular" width="100%" height={204} />
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
            <Grid item xs={1}>
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
            <Grid item xs={1}>
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
          </Grid>
        </Grid>
        <Grid item xs>
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
        <Grid item xs>
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
        <Grid item xs>
          <Media.MoreAction sx={{ width: "100%", height: 200 }}>
            <CardActionArea>
              asd
            </CardActionArea>
          </Media.MoreAction>
        </Grid>
      </Grid>
    </Grid>
  );
}
