import React from 'react'
// MUI
import { Link, Typography, Container, Box } from '@mui/material'
import { styled } from '@mui/material/styles'

const ContainerWrapper = styled(Container)(
  () => `
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 0px;
  `,
)

export default function Info() {
  return (
    <ContainerWrapper disableGutters>
      <Box sx={{ display: 'flex', gap: '33px' }}>
        <Link>Chat with us</Link>
        <Typography variant="subtitle1">+420 336 775 664</Typography>
        <Typography variant="subtitle1">info@freshnesecom.com</Typography>
      </Box>
      <Box sx={{ display: 'flex', gap: '38px' }}>
        <Link>Blog</Link>
        <Link>About Us</Link>
        <Link>Careers</Link>
      </Box>
    </ContainerWrapper>
  )
}
