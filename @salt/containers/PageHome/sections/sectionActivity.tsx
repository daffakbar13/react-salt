import { Box, Grid, Skeleton, Typography } from "@mui/material";
import * as React from "react";
import Divider from "../../../components/Divider";
import Media from "../../../components/Media";
import TitleMenu from "../../../components/TitleMenu";

export default function SectionActivity() {
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
      <Box display="flex" flexDirection="column" gap={2} height="100%">
        <Grid container spacing={2} columns={3}>
          <Grid item xs={1}>
            <Media.Collection sx={{ width: "100%", height: 80 }}>
              <Skeleton variant="rectangular" width="100%" height={80} />
            </Media.Collection>
          </Grid>
          <Grid item xs={2} sx={{color:'secondary.main'}}>
            <Typography variant="subtitle2" component='span'>John Stainior</Typography>
            <Typography variant="caption" component='span'>John Stainior</Typography>

          </Grid>
        </Grid>
      </Box>
      <Divider />
    </Box>
  );
}
