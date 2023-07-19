import React, { useState } from 'react'
// MUI
import { IconButton, Typography, Container, Box, Button } from '@mui/material'
import { styled } from '@mui/material/styles'

const ContainerWrapper = styled(Container)(
  ({ theme }) => `
    display: flex;
    width: 100%;
    padding: 16px 0px;
    flex-direction: column;
    align-items: flex-start;
    gap: 39px;
    background-color: ${theme.palette.grey[100]};
  `
)

const CategoriesButton = styled(Button)(
  ({ theme }) => `
    height: 23px;
    background: ${theme.palette.grey[100]};
    padding: 0;
    font-size: 15px;i
    font-weight: 500;
    &:hover {
      background-color: ${theme.palette.grey[100]};
    },
    &:focus {
      background-color: ${theme.palette.grey[100]};
    }

    .MuiButton-endIcon {
      margin: 2px;
      width: 12px;
      height: 12px;
      color: #000;
      // :hover {
      //   transition: transform 0.3s 0s;
      //   transform: rotate(360deg);
      // }
    }
  `
)

export default function Navbar() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <ContainerWrapper disableGutters>
      <CategoriesButton
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{ zIndex: '1000' }}
        variant='text'
        endIcon={
          <IconButton
            className={isHovered ? 'rotating' : ''}
            sx={{
              padding: 0,
              pointerEvents: 'none',
              '&:hover': {
                backgroundColor: '#F9F9F9'
              },
            }}>
            <img src='../../../public/static/images/logos/ic-chevron-down.svg' style={{ height: '12px', margin: '0px' }} />
          </IconButton>
        }
      >Bakery</CategoriesButton>
    </ContainerWrapper >
  )
}
