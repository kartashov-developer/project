import { Divider, Breadcrumbs, Link, Typography } from '@mui/material';
import { Link as LinkR } from 'react-router-dom';
// Home Icon
import { HomeIconStyled } from '../Icons/HomeIcon/HomeIcon';

export const Breadcrumb2 = ({ mainPage }) => {
  return (
    <>
      <Breadcrumbs aria-label='breadcrumb'>
        <Link
          component={LinkR}
          to={'/'}
          sx={{ display: 'flex' }}
          underline='hover'
          color='inherit'
        >
          <HomeIconStyled />
          Home
        </Link>
        <Typography>{mainPage}</Typography>
      </Breadcrumbs>
    </>
  );
};
