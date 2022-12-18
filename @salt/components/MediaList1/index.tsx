import {
  Box,
  CardActionArea,
  Grid,
  Skeleton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import * as React from "react";
import NorthIcon from "@mui/icons-material/North";
import Media from "../Media";
import IconButton from "../IconButton";

interface MediaList1Props {
  data: any[];
  moreAction: {
    label: string;
    Icon: typeof NorthIcon;
  };
}

export default function MediaList1(props: MediaList1Props) {
  const {
    data,
    moreAction: { label, Icon },
  } = props;
  for (let i = 0; i < 5; i++) {
    data.push("test");
  }
  const [bigMedia] = data;
  const rightSection = data.slice(1, 3);
  const bottomSection = data.slice(3, 5);
  const theme = useTheme();
  const tablet = useMediaQuery(theme.breakpoints.down("md"));
  const [firstLabel] = label.split(' ')
  const secondLabel = label.split(' ').slice(1).join('')

  return (
    <Grid container spacing={1} columns={3}>
      <Grid item xs={3} md={2}>
        <Media.Collection sx={{ width: "100%", height: tablet ? 200 : "100%" }}>
          <CardActionArea>
            <Skeleton
              variant="rectangular"
              width="100%"
              height={tablet ? 200 : 408}
            />
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
                  <Icon />
                </IconButton>
                <Box>
                  <Typography variant="subtitle2" color="secondary">
                    {firstLabel}
                  </Typography>
                  <Typography variant="subtitle2" color="secondary">
                    {secondLabel}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </CardActionArea>
        </Media.MoreAction>
      </Grid>
    </Grid>
  );
}
