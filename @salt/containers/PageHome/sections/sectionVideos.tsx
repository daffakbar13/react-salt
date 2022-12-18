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
    <Grid container spacing={1}>
      <Grid item xs={12} md={8}>
        <Box display={"flex"} justifyContent="space-between">
          <div>Videos</div>
          <div>Browse all videos</div>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={1}>
          <Grid item xs={12} md={8}>
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
          <Grid item xs={12} md={4} container spacing={1}>
            <Grid item xs={12}>
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
            <Grid item xs={12}>
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
          <Grid item xs={12} md={4}>
            <Media.Collection sx={{ width: "100%", height: 200 }}>
              <CardActionArea>
                <Skeleton variant="rectangular" width="100%" height={200} />
                <CardContent
                  style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    left: 0,
                    zIndex: 1,
                  }}
                >
                  <Skeleton width="100%" height={30} />
                  <Skeleton width="100%" height={20} />
                  <Skeleton width="80%" height={20} />
                </CardContent>
              </CardActionArea>
            </Media.Collection>
          </Grid>
          <Grid item xs={12} md={4}>
            <Media.Collection sx={{ width: "100%", height: 200 }}>
              <CardActionArea>
                <Skeleton variant="rectangular" width="100%" height={200} />
                <CardContent
                  style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    left: 0,
                    zIndex: 1,
                  }}
                >
                  <Skeleton width="100%" height={30} />
                  <Skeleton width="100%" height={20} />
                  <Skeleton width="80%" height={20} />
                </CardContent>
              </CardActionArea>
            </Media.Collection>
          </Grid>
          <Grid item xs={12} md={4}>
            <Media.MoreAction sx={{ width: "100%", height: 200 }}>
              asd
            </Media.MoreAction>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
