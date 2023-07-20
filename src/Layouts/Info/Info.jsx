import React, { useState } from 'react'
// MUI
import { Link, Typography, Container, Box } from '@mui/material'
import { styled } from '@mui/material/styles'

import ChatWithUs from '../../components/DialogComponents/ChatWithUs'

const ContainerWrapper = styled(Container)(
  () => `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 0px;
  `,
)

export default function Info() {


  return (
    <ContainerWrapper maxWidth='lg' disableGutters>
      <Box sx={{ display: 'flex', gap: '33px', alignItems: 'center' }}>
        {/* <Link href="#">Chat with us</Link> */}
        <ChatWithUs />
        <Typography variant="subtitle1">+420 336 775 664</Typography>
        <Typography variant="subtitle1">info@freshnesecom.com</Typography>
      </Box>
      <Box sx={{ display: 'flex', gap: '38px' }}>
        <Link href="#">Blog</Link>
        <Link href="#">About Us</Link>
        <Link href="#">Careers</Link>
      </Box>
    </ContainerWrapper>
  )
}
