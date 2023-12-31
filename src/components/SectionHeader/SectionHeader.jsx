import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const SectionHeader = ({ sectionHeader, buttonText, onClick, link }) => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%'
        }}
      >
        <Typography variant='h4' fontWeight={'600'}>
          {sectionHeader}
        </Typography>
        <Button
          endIcon={
            <img src='../../../public/static/images/icons/right-arrow.svg' />
          }
          onClick={onClick}
        >
          {buttonText}
        </Button>
      </Box>
    </>
  );
};

export default SectionHeader;
