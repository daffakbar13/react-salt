import {
  Box,
  CardActionArea,
  CardContent,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import * as React from "react";
import MediaCollection, { MediaCollectionMoreAction } from "../../../components/MediaCollection";

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
            <MediaCollection sx={{ width: "100%", height: "100%" }}>
              <CardActionArea>
                <Skeleton variant="rectangular" width="100%" height={204} />
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
            </MediaCollection>
          </Grid>
          <Grid item xs={12} md={4} container spacing={1}>
            <Grid item xs={12}>
              <MediaCollection sx={{ width: "100%", height: 200 }}>
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
              </MediaCollection>
            </Grid>
            <Grid item xs={12}>
              <MediaCollection sx={{ width: "100%", height: 200 }}>
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
              </MediaCollection>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <MediaCollection sx={{ width: "100%", height: 200 }}>
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
            </MediaCollection>
          </Grid>
          <Grid item xs={12} md={4}>
            <MediaCollection sx={{ width: "100%", height: 200 }}>
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
            </MediaCollection>
          </Grid>
          <Grid item xs={12} md={4}>
            <MediaCollectionMoreAction sx={{ width: "100%", height: 200 }}>
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
            </MediaCollectionMoreAction>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
