import { Divider, Breadcrumbs, Link, Typography } from "@mui/material"
// Home Icon
import { HomeIconStyled } from "../Icons/HomeIcon/HomeIcon";

export const Breadcrumb2 = ({ mainPage }) => {
  return (
    <>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          sx={{ display: 'flex', alignItems: 'center' }}
          underline="hover"
          color="inherit"
          href='#'
        >
          <HomeIconStyled />
          Home
        </Link>
        <Typography>{mainPage}</Typography>
      </Breadcrumbs >
      <Divider />
    </>
  )
}
