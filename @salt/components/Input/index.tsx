import { OutlinedInput, styled } from "@mui/material";
import { OutlinedInputProps } from "@mui/material/OutlinedInput";

const Input = styled(OutlinedInput)<OutlinedInputProps>(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  borderRadius: 0,
  color: theme.palette.primary.main,
}));

export default Input;
