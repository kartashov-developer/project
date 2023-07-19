import React from 'react'
// MUI
import { Link, Typography, Container, Box, Badge } from '@mui/material'
import { styled } from '@mui/material/styles'
// Components
import SearchArea from './SearchArea';
// -------------------------------------------------------------------------
// MUI styled
const WrapperBox = styled(Box)(
  ({ theme }) => `
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    padding: 40px 0px;
    border-top: 1px solid ${theme.palette.grey[200]};
  `
)
// -------------------------------------------------------------------------
export default function Info() {
  return (
    <WrapperBox>
      {/* Logo */}
      <Box sx={{ p: '16px 0px' }}>
        <img
          src='../../../public/static/images/logos/Freshnesecom.svg'
          alt='Logo Image'
          style={{ cursor: 'pointer' }}
        />
      </Box>
      {/* Middle Component Search */}
      <SearchArea />
      {/* Two Icon Buttons */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
        <img src='../../../public/static/images/logos/ic-actions-user.svg' alt='Profile Button' />
        <Badge badgeContent={4} anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}>
          <img src='../../../public/static/images/logos/ic-ecommerce-basket.svg' alt='Basket Button' />
        </Badge>
      </Box>
    </WrapperBox>
  )
}
