import {
  Breadcrumbs as BreadcrumbsMui,
  BreadcrumbsProps,
  styled,
} from "@mui/material";

const Breadcrumbs = styled(BreadcrumbsMui)<BreadcrumbsProps>(({ theme }) => ({
  color: theme.palette.secondary.main,
  "& 	.MuiBreadcrumbs-separator": {
    margin: "0 20px",
  },
}));

export default Breadcrumbs;
