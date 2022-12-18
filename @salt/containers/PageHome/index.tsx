import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Skeleton,
  Typography,
} from "@mui/material";
import * as React from "react";

export default function PageHome() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <Skeleton variant="rectangular" width="100%" height={118} />
        <CardContent>
          <Skeleton width="100%" height={30} />
          <Skeleton width="100%" height={20} />
          <Skeleton width="80%" height={20} />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
