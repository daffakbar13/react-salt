import { Typography } from "@mui/material";
import * as React from "react";
import Breadcrumbs from "../../components/BreadCrumbs";
import Divider from "../../components/Divider";
import Navbar from "../../components/Navbar";

export default function HeaderContainer(props: React.PropsWithChildren) {
  const { children } = props;

  return (
    <>
      <Navbar />
      <Divider/>
      <Breadcrumbs>
      <Typography>Breadcrumbs</Typography>
      <Typography>Breadcrumbs</Typography>
      <Typography>Breadcrumbs</Typography>
        <Typography>Breadcrumbs</Typography>
      </Breadcrumbs>
      <Divider/>
      {children}
    </>
  );
}
