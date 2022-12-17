import * as React from 'react';
import { Breadcrumbs as BreadcrumbsMui, Link, Typography } from '@mui/material';

export default function Breadcrumbs() {
  return (
      <BreadcrumbsMui aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          MUI
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          Core
        </Link>
        <Typography color="text.primary">Breadcrumbs</Typography>
      </BreadcrumbsMui>
  );
}