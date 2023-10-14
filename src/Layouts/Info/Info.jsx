import React, { useState } from 'react';
// MUI
import { Link, Typography, Container, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as LinkR } from 'react-router-dom';

import ChatWithUs from '../../components/DialogComponents/ChatWithUs';

const ContainerWrapper = styled(Container)(
  () => `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0px;
  `
);

export default function Info() {
  return (
    <ContainerWrapper maxWidth='lg' disableGutters>
      {/* Left Side */}
      <Box sx={{ display: 'flex', gap: '33px', alignItems: 'center' }}>
        {/* Dialog */}
        <ChatWithUs />
        {/* Phone */}
        <Link
          variant='subtitle1'
          href='tel:+420336775664'
          sx={{
            color: '#202020'
          }}
        >
          +420 336 775 664
        </Link>
        {/* Email */}
        <Link
          variant='subtitle1'
          href='mailto:example@example.com'
          sx={{
            color: '#202020'
          }}
        >
          info@freshnesecom.com
        </Link>
      </Box>
      {/* Right Side */}
      <Box sx={{ display: 'flex', gap: '38px' }}>
        <Link component={LinkR} to='/blog'>
          Blog
        </Link>
        <Link component={LinkR} to='/about'>
          About Us
        </Link>
        <Link component={LinkR} to='/careers'>
          Careers
        </Link>
      </Box>
    </ContainerWrapper>
  );
}
