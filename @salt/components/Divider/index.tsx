import { Divider as DividerMui, DividerProps, styled } from '@mui/material'

const Divider = styled(DividerMui)<DividerProps>(({theme})=>({
    borderColor: theme.palette.secondary.main,
    borderBottomWidth: 1
}))

export default Divider