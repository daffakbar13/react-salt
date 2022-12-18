import {
  IconButton as IconButtonMui,
  styled,
  IconButtonProps,
} from "@mui/material";

const IconButton = styled(IconButtonMui)<IconButtonProps>(({ theme }) => ({
  borderColor: theme.palette.secondary.main,
  borderWidth: 1,
  borderStyle: "solid",
  height: 40,
  width: 40,
  color: theme.palette.secondary.main,
  fontSize: 20,
}));

export default IconButton;
