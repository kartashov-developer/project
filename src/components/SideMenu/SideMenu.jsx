import React from 'react';

import { Box, Button, Stack, Typography } from '@mui/material';
//----------------------------------------------------------------------------

const SideMenu = ({ titleText, buttonText, children }) => {
  return (
    <Box sx={{ width: '269px', height: '282px' }}>
      <Typography variant='h4' mb={'16px'} fontWeight={'600'}>
        {titleText}
      </Typography>

      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}
      >
        {/* Category Links */}
        {children}
      </Stack>

      <Button
        variant='text'
        sx={{ mt: '48px' }}
        endIcon={
          <img src='../../../public/static/images/icons/right-arrow-black.svg' />
        }
      >
        {buttonText}
      </Button>
    </Box>
  );
};

export default SideMenu;
