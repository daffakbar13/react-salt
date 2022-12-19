import { Button as ButtonMui, ButtonProps, styled } from "@mui/material";

const Button = styled(ButtonMui)<ButtonProps>(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  borderRadius: 0,
  color: theme.palette.primary.main,
  textTransform: "none",
  boxShadow: "none",
}));

export default Button;
