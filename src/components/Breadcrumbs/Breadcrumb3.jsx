import { Divider, Breadcrumbs, Typography, Link } from '@mui/material';
// Home Icon

import { Link as LinkR } from 'react-router-dom';
import { HomeIconStyled } from '../Icons/HomeIcon/HomeIcon';

export const Breadcrumb3 = ({ link1, page1, mainPage, icon }) => {
  return (
    <>
      <Breadcrumbs aria-label='breadcrumb'>
        <Link
          component={LinkR}
          sx={{ display: 'flex' }}
          underline='hover'
          color='inherit'
          to={'/'}
        >
          <HomeIconStyled />
          Home
        </Link>
        <Link
          component={LinkR}
          sx={{ display: 'flex' }}
          underline='hover'
          color='inherit'
          to={link1}
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
