import { Box, Typography } from "@mui/material";
import * as React from "react";
import { useNavigate } from "react-router-dom";

export default function SectionActivity() {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={2}
      height={666}
      borderBottom="1px solid secondary.main"
    >
      <Box
        display={"flex"}
        justifyContent="space-between"
        sx={{ color: "secondary.main" }}
      >
        <Typography variant="h5">Activity</Typography>
        <Box display={"flex"} flexDirection="column-reverse">
          <Typography
            variant="subtitle2"
            sx={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            View timeline / Filter activities
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
