import React, { useState } from 'react';
// MUI
import { Box, Alert, Divider, Input, MenuItem, Select, InputBase, FormControl, InputLabel } from '@mui/material';
import {
  Search as SearchIcon,
  ExpandMore as ExpandMoreIcon
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
// DB
import { categoryMenuForSearch } from '../../db/categoryMenuForSearch';
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

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    borderRadius: 4,
    backgroundColor: theme.palette.background.paper,
    border: 'none',
    width: 150,
    fontSize: 15,
    fontWeight: 700,
    padding: '0',
    background: '#F9F9F9',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: 'Poppins',
    '&:hover': {
      background: '#F9F9F9',
    },
    '&:active': {    
      background: '#F9F9F9',
    },
    '&:focus': {
      background: '#F9F9F9',
    }
  },
  '& .MuiSvgIcon-root': {
    marginLeft: 200,
    '&:hover': {
      border: 'none'
    }
  },
  '& #demo-customized-select-native': {
    minWidth: 0,
    padding: 0,
  }
}));
// -------------------------------------------------------------------------
export default function Info() {
  const [age, setAge] = React.useState('');
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <WrapperBox>
      <FormControl sx={{ m: 1 }} variant="standard" >
        <InputLabel htmlFor="demo-customized-select-native"></InputLabel>
        <Select
          id="demo-customized-select-native"
          onChange={handleChange}
          input={<BootstrapInput />}
          defaultValue={100}
        >
          {categoryMenuForSearch.map((item) => {
            return (
              <MenuItem key={item.id} value={item.id}>
                {item.categoryName}
              </MenuItem>
            )
          })}
        </Select>
      </FormControl>
      <Divider
        orientation='vertical'
        flexItem
        sx={{ backgroundColor: '#D1D1D1', mr: '24px', ml: '24px' }}
      />

      <Input
        disableUnderline
        placeholder='Search products, categories ...'
        variant='filled'
        sx={{ width: '257px', height: '10px' }}
      />
      <SearchIcon
        sx={{ transform: 'rotate(90deg)', cursor: 'pointer', ml: '12px' }}
        onClick={() => {}}
      />
    </WrapperBox>
  );
}
