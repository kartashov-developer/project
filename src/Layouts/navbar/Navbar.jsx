import { useState } from 'react';
// MUI
import { IconButton, Typography, Container, Box, Button, Menu, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
// DB
import { navbarMenu } from '../../db/navbarMenu';
// -----------------------------------------------------------------------------
/* Styled Components */
const ContainerWrapper = styled(Container)(
  ({ theme }) => `
    display: flex;
    width: 100%;
    padding: 16px 0px 16px 0px;
    flex-direction: column;
    align-items: flex-start;
    gap: 39px;
    margin-bottom: 0px;
    background-color: ${theme.palette.grey[100]};
  `
);

const CategoriesButton = styled(Button)(
  ({ theme }) => `
    height: 23px;
    background: ${theme.palette.grey[100]};
    padding: 0;
    font-size: 15px;
    font-weight: 500;
    &:hover {
      background-color: ${theme.palette.grey[100]};
      text-decoration: underline;
    },
    &:focus {
      background-color: ${theme.palette.grey[100]};
    }

    .MuiButton-endIcon {
      margin: 2px;
      width: 12px;
      height: 12px;
      color: #000;
    }
  `
);
/* Navbar Component */
export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <ContainerWrapper disableGutters>
      <CategoriesButton
        onClick={handleMenuOpen}
        variant='text'
        endIcon={
          <IconButton sx={{ padding: '1px 0 0px 0' }}>
            <img
              src='../../../public/static/images/logos/ic-chevron-down.svg'
              style={{ height: '12px', margin: '0px' }}
            />
          </IconButton>
        }
      >
        Bakery
      </CategoriesButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
      {navbarMenu.filter(item => {
        return item.categoryName === 'Bakery'
      }).map(item => {
        return (
        <MenuItem key={item.id}>
          <Typography variant='h5'>{item.title}</Typography>
        </MenuItem>
        )
      })}
      </Menu>
    </ContainerWrapper>
  );
}
