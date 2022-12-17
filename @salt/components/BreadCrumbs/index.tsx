import { Breadcrumbs as BreadcrumbsMui, BreadcrumbsProps, styled } from '@mui/material'

const Breadcrumbs = styled(BreadcrumbsMui)<BreadcrumbsProps>(({theme})=>({
    color: theme.palette.primary.main,
}))

export default Breadcrumbs