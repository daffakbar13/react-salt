import { Grid } from "@mui/material";
import * as React from "react";
import NorthIcon from "@mui/icons-material/North";
import TitleMenu from "../../../components/TitleMenu";
import MediaList1 from "../../../components/MediaList1";

export default function SectionVideos() {
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
      <Grid item xs={3}>
        <MediaList1
          data={[]}
          moreAction={{ label: "Upload Your Own Video", Icon: NorthIcon }}
        />
      </Grid>
    </Grid>
  );
}
