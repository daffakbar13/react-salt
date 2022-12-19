import { Grid } from "@mui/material";
import * as React from "react";
import TitleMenu from "../../../components/TitleMenu";
import MediaList1 from "../../../components/MediaList1";
import AlbumIcon from "@mui/icons-material/Album";

export default function SectionPeople() {
  return (
    <Grid container spacing={1} columns={3}>
      <Grid item xs md={2}>
        <TitleMenu
          title="People"
          action={{
            label: "View all",
            path: "/",
          }}
        />
      </Grid>
      <Grid item xs={3}>
        <MediaList1
          data={[]}
          moreAction={{ label: "Show Your Work", Icon: AlbumIcon }}
        />
      </Grid>
    </Grid>
  );
}
