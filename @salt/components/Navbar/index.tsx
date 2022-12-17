import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Grid, IconButton, InputAdornment } from "@mui/material";
import Input from "../Input";
import SearchIcon from "@mui/icons-material/Search";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Button from "../Button";
import PersonIcon from "@mui/icons-material/Person";

export default function Navbar() {
  const theme = useTheme();
  return (
    <Grid container spacing={{xs:2}}>
      <Grid item xs={3} style={{ fontSize: 30 }}>
        <span style={{ color: theme.palette.secondary.main }}>Social</span>
        <span style={{ color: theme.palette.grey[400] }}>Network</span>
      </Grid>
      <Grid item xs={6}>
        <Input
          size="small"
          fullWidth
          placeholder="Find..."
          endAdornment={
            <InputAdornment position="end">
              <IconButton edge="end" color="primary">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
        />
      </Grid>
      <Grid item xs={1}>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<ArrowUpwardIcon />}
        >
          Upload
        </Button>
      </Grid>
      <Grid item xs={2}>
        <Box flex={'20px'}>
          <Button variant="contained" color="secondary">
            <PersonIcon />
          </Button>
          <div>
            <div style={{ color: theme.palette.secondary.main, fontSize: 18 }}>
              Waseem
            </div>
            <div style={{ color: theme.palette.secondary.main, fontSize: 18 }}>
              Waseem
            </div>
          </div>
        </Box>
      </Grid>
    </Grid>
  );
}
