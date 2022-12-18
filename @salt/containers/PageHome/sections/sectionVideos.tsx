import { Box, CardActionArea, Grid, Skeleton, Typography } from "@mui/material";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import Media from "../../../components/Media";
import NorthIcon from "@mui/icons-material/North";
import IconButton from "../../../components/IconButton";
import TitleMenu from "../../../components/TitleMenu";

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
        <TitleMenu
          title="Videos"
          action={{
            label: "Browse all videos",
            path: "/",
          }}
        />
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
            <CardActionArea>
              <Box
                display="flex"
                justifyContent={"center"}
                flexDirection="column"
                height={200}
              >
                <Box display={"flex"} justifyContent="center">
                  <IconButton sx={{ margin: "auto 10px" }}>
                    <NorthIcon />
                  </IconButton>
                  <div>
                    <Typography variant="subtitle2" color="secondary">
                      Upload
                    </Typography>
                    <Typography variant="subtitle2" color="secondary">
                      Your Own Video
                    </Typography>
                  </div>
                </Box>
              </Box>
            </CardActionArea>
          </Media.MoreAction>
        </Grid>
      </Grid>
    </Grid>
  );
}
