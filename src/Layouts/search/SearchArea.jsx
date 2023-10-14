import React, { useState } from 'react';
// MUI
import { Box, Button, Divider, Input, MenuItem, Select, InputBase, FormControl, InputLabel, Snackbar, Typography } from '@mui/material';
import {
  Search as SearchIcon,
  ExpandMore as ExpandMoreIcon
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';
// DB
import { categoryMenuForSearch } from '../../db/categoryMenuForSearch';

import ChatWithUs from '../../components/DialogComponents/ChatWithUs';
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
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const action = (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }}>
      <Button variant='contained' size="large" onClick={handleClose}>
        I forgive you!
      </Button>
        <Typography variant='body2'>⬆ This variant will close that window.</Typography>
      <Button 
        variant='contained' 
        size="small" 
        sx={{ 
          background: '#FFF',
          border: '2px solid #FFF',
          '&:hover': {
            background: '#FFF',
            border: '2px solid #FFF'
          },
          '&:focus': {
            background: '#FFF',
            border: '2px solid #FFF'
          }
        }} 
      >
          <ChatWithUs />
      </Button>
        <Typography variant='body2'>⬆ This variant will open dialog.</Typography>
    </Box>
  );

  return (
    <WrapperBox>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message={
          <>
          <Typography variant='h2'>
            Please, don't be mad!
          </Typography>
          <Typography variant='h6'>
            Search is not working!
          </Typography>
          <Typography variant='subtitle2'>
            We are trying to repair this right now...
          </Typography>
        </>
        }
        action={action}
      />
      <FormControl sx={{ m: 1 }} variant="standard" >
        <InputLabel htmlFor="demo-customized-select-native"></InputLabel>
        <Select
          id="demo-customized-select-native"
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
        onChange={handleClick}
      />
      <SearchIcon
        sx={{ transform: 'rotate(90deg)', cursor: 'pointer', ml: '12px' }}
        onClick={handleClick}
      />
    </WrapperBox>
  );
}
