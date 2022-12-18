import { Box, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

interface Action {
  label: string;
  path: string;
}

interface TitleMenuProps {
  title: string;
  action: Action;
}

export default function TitleMenu(props: TitleMenuProps) {
  const {
    action: { label, path },
    title,
  } = props;
  const navigate = useNavigate();

  return (
    <Box
      display={"flex"}
      justifyContent="space-between"
      sx={{ color: "secondary.main" }}
    >
      <Typography variant="h5">{title}</Typography>
      <Box display={"flex"} flexDirection="column-reverse">
        <Typography
          variant="subtitle2"
          sx={{ cursor: "pointer" }}
          onClick={() => navigate(path)}
        >
          {label}
        </Typography>
      </Box>
    </Box>
  );
}
