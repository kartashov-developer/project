import { useState } from 'react';

import styled from '@emotion/styled';
import { Button, IconButton, Tooltip, Menu, MenuItem } from '@mui/material';

const ButtonStyled = styled(Button)(
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

export const CategoriesButton = ({ buttonText, children }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <ButtonStyled
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
        {buttonText}
      </ButtonStyled>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        {children}
      </Menu>
    </>
  );
};
