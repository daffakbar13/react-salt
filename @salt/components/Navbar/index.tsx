import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Grid, IconButton, InputAdornment } from "@mui/material";
import Input from "../Input";
import SearchIcon from "@mui/icons-material/Search";
import SendIcon from "@mui/icons-material/Send";
import Button from "../Button";

export default function Navbar() {
  const theme = useTheme();
  return (
    <Grid container spacing={2}>
      <Grid item xs={3} style={{ fontSize: 30 }}>
        <span style={{ color: theme.palette.secondary.main }}>Social</span>
        <span style={{ color: theme.palette.grey[400] }}>Network</span>
      </Grid>
      <Grid item xs={6}>
        <Input
          size="small"
          fullWidth
          placeholder='Find...'
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                edge="end"
                color="primary"
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </Grid>
      <Grid item xs={3}>
        <Button variant="contained" color='secondary' endIcon={<SendIcon />}>
          Send
        </Button>
      </Grid>
    </Grid>
  );
}
