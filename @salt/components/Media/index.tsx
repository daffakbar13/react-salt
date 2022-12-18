import { Card, CardContent, CardContentProps, CardProps, styled } from '@mui/material'

const Collection = styled(Card)<CardProps>(({theme})=>({
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 0,
    boxShadow: 'none'
}))

export const MoreAction = styled(Card)<CardProps>(({theme})=>({
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.secondary.main
}))

const Description = styled(CardContent)<CardContentProps>(()=>({
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    zIndex: 1,
}))

const Media = {Collection, MoreAction, Description}

export default Media