import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Grid } from '@mui/material';
import SearchBar from '../SearchBar';

export default function Navbar() {
  const theme = useTheme();
  return (
    <Grid container spacing={2}>
      <Grid item xs={3} style={{ fontSize: 30 }}>
        <span style={{ color: theme.palette.secondary.main }}>Social</span>
        <span style={{ color: theme.palette.grey[400] }}>Network</span>
      </Grid>
      <Grid item xs={6}>
      <SearchBar/>
      </Grid>
    </Grid>
  );
}
