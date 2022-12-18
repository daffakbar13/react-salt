import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import * as React from "react";

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
          <Grid item xs={8}>
            <Card sx={{ width: "100%" }}>
              <CardActionArea>
                <Skeleton variant="rectangular" width="100%" height={118} />
                <CardContent>
                  <Skeleton width="100%" height={30} />
                  <Skeleton width="100%" height={20} />
                  <Skeleton width="80%" height={20} />
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ width: "100%" }}>
              <CardActionArea>
                <Skeleton variant="rectangular" width="100%" height={118} />
                <CardContent>
                  <Skeleton width="100%" height={30} />
                  <Skeleton width="100%" height={20} />
                  <Skeleton width="80%" height={20} />
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
