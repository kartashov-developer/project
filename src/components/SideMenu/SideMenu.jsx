import React from 'react';

import { Link } from 'react-router-dom';

import { Box, Button, Stack, Typography } from '@mui/material';
//----------------------------------------------------------------------------

const SideMenu = ({ titleText, buttonText, children }) => {
  return (
    <Box sx={{ width: '300px', maxHeight: '282px' }}>
      <Typography variant='h4' mb={'16px'} fontWeight={'600'}>
        {titleText}
      </Typography>

      <Stack
        component={Link}
        to={'/categories/'}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          textDecorationColor: '#6A983C'
        }}
      >
        {/* Category Links */}
        {children}
      </Stack>
      {buttonText ? (
        <Button
          variant='text'
          component={Link}
          to={'/categories/'}
          sx={{ mt: '48px' }}
          endIcon={
            <img src='../../../public/static/images/icons/right-arrow-black.svg' />
          }
        >
          {buttonText}
        </Button>
      ) : (
        <></>
      )}
    </Box>
  );
};

export default SideMenu;
