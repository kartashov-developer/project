import React from 'react';
// MUI
import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export default function Line() {
  return (
    <>
      <Box
        sx={{
          height: '55px',
          width: '100%',
          margin: '0 auto',
          backgroundColor: '#F9F9F9',
          position: 'absolute',
          top: 190
        }}
      />
    </>
  );
}
