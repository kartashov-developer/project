import React from 'react';
// MUI
import { Box, Button, Divider, IconButton, Input, Menu, MenuItem } from '@mui/material';
import {
  Search as SearchIcon,
  ExpandMore as ExpandMoreIcon
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
// -------------------------------------------------------------------------
// MUI styled
const WrapperBox = styled(Box)(
  ({ theme }) => `
    display: flex;
    align-items: center;
    width: 500px;
    height: 42px;
    padding: 8px 16px;
    border-radius: 12px;
    border: 1px solid ${theme.palette.grey[400]};
    background: ${theme.palette.grey[100]};
  `
);

const CategoriesButton = styled(Button)(
  ({ theme }) => `
    height: 23px;
    background: ${theme.palette.grey[100]};
    padding: 0;

    &:hover {
      background-color: ${theme.palette.grey[100]};
    },
    &:focus {
      background-color: ${theme.palette.grey[100]};
    }
  `
);
// -------------------------------------------------------------------------
export default function Info() {
  return (
    <WrapperBox>
      <CategoriesButton
        variant='text'
        endIcon={
          <IconButton
            size='medium'
            sx={{
              padding: 0,
              pointerEvents: 'none',
              '&:hover': {
                backgroundColor: '#F9F9F9'
              }
            }}
          >
            <img
              src='../../../public/static/images/logos/ic-chevron-down.svg'
              style={{ height: '16px' }}
            />
          </IconButton>
        }
      >
        All categories
      </CategoriesButton>

      <Divider
        orientation='vertical'
        flexItem
        sx={{ backgroundColor: '#D1D1D1', mr: '24px', ml: '24px' }}
      />

      <Input
        disableUnderline
        placeholder='Search Products, categories ...'
        variant='filled'
        sx={{ width: '257px', height: '10px' }}
      />
      <SearchIcon
        sx={{ transform: 'rotate(90deg)', cursor: 'pointer', ml: '12px' }}
        onClick={() => alert('FIX ME')}
      />
    </WrapperBox>
  );
}
