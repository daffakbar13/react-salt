import { Box, Typography } from "@mui/material";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import Divider from "../../../components/Divider";
import TitleMenu from "../../../components/TitleMenu";

export default function SectionActivity() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={2}
      height={666}
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
    </Box>
  );
}
