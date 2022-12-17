import * as React from "react";
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';

export default function Navbar() {
    const theme = useTheme()
  return (
    <Grid container spacing={2}>
        <Grid item xs={4}>
            <span color={theme.palette.secondary.main}>
                <h1>Social</h1>
            </span>
            <span color="grey">
                <h1>Network</h1>
            </span>
        </Grid>
    </Grid>
  );
}
