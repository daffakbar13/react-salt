import { Card, CardProps, styled } from '@mui/material'

const MediaCollection = styled(Card)<CardProps>(({theme})=>({
    backgroundColor: theme.palette.secondary.main
}))

export default MediaCollection