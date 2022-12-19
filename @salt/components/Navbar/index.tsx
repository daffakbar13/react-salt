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
    <Grid container spacing={{ xs: 2, md: 5 }} columns={2}>
      <Grid item xs={2} md="auto" style={{ fontSize: 30 }}>
        <span style={{ color: theme.palette.secondary.main }}>Social</span>
        <span style={{ color: theme.palette.grey[400] }}>Network</span>
      </Grid>
      <Grid item xs={2} md>
        <Grid container spacing={2} columns={3}>
          <Grid item xs={3} md>
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
          <Grid item xs md="auto">
            <Grid container spacing={2} justifyContent="end">
              <Grid item xs="auto">
                <Button
                  variant="contained"
                  color="secondary"
                  startIcon={<ArrowUpwardIcon />}
                >
                  Upload
                </Button>
              </Grid>
              <Grid item xs="auto">
                <Grid container spacing={1}>
                  <Grid item>
                    <Button variant="contained" color="secondary">
                      <PersonIcon />
                    </Button>
                  </Grid>
                  <Grid item>
                    <Box
                      display={"flex"}
                      flexDirection="column"
                      justifyContent={"center"}
                      sx={{ color: "secondary.main" }}
                    >
                      <span style={{ fontSize: 16 }}>Waseem</span>
                      <span style={{ fontSize: 12 }}>Arshad</span>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
