import { Box, Grid, Typography } from "@mui/material";
import * as React from "react";
import Breadcrumbs from "../../components/BreadCrumbs";
import Divider from "../../components/Divider";
import Navbar from "../../components/Navbar";

export default function HeaderContainer(props: React.PropsWithChildren) {
  const { children } = props;
  const dataBreadcrumbs = [
    "Videos",
    "People",
    "Documents",
    "Events",
    "Communities",
    "Favorites",
    "Channels",
  ];

  return (
    <Box display={"flex"} flexDirection="column" gap={5}>
      <Navbar />
      <Box display={"flex"} flexDirection="column" gap={1}>
        <Divider />
        <Breadcrumbs>
          {dataBreadcrumbs.map((text, index) => (
            <Typography key={index}>{text}</Typography>
          ))}
        </Breadcrumbs>
        <Divider />
      </Box>
      {children}
    </Box>
  );
}
