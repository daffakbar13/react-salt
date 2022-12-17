import { Divider as DividerMui, DividerProps, styled } from '@mui/material'

const Divider = styled(DividerMui)<DividerProps>(({theme})=>({
    backgroundColor: theme.palette.secondary.main,
    borderBottomWidth: 1
}))

export default Divider