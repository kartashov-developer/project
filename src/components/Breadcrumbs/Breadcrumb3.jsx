import { Divider, Breadcrumbs, Link, Typography } from '@mui/material';
// Home Icon
import { HomeIconStyled } from '../Icons/HomeIcon/HomeIcon';

export const Breadcrumb3 = ({ link1, page1, mainPage, icon }) => {
  return (
    <>
      <Breadcrumbs aria-label='breadcrumb'>
        <Link
          sx={{ display: 'flex' }}
          underline='hover'
          color='inherit'
          href='#'
        >
          <HomeIconStyled />
          Home
        </Link>
        <Link
          sx={{ display: 'flex' }}
          underline='hover'
          color='inherit'
          href={link1}
        >
          {icon}
          {page1}
        </Link>
        <Typography>{mainPage}</Typography>
      </Breadcrumbs>
      <Divider />
    </>
  );
};
