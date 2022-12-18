import { Grid } from "@mui/material";
import * as React from "react";
import TitleMenu from "../../../components/TitleMenu";
import MediaList1 from "../../../components/MediaList1";
import AddIcon from '@mui/icons-material/Add';

export default function SectionDocuments() {
  return (
    <Grid container spacing={1} columns={3}>
      <Grid item xs md={2}>
        <TitleMenu
          title="Documents"
          action={{
            label: "Browse all documents",
            path: "/",
          }}
        />
      </Grid>
      <Grid item xs={3}>
        <MediaList1
          data={[]}
          moreAction={{ label: "Share Your Document", Icon: AddIcon }}
        />
      </Grid>
    </Grid>
  );
}
