import { Typography, styled } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const TagBox = styled(Typography)(
  ({ theme }) => `
    padding: ${theme.spacing(0, 2)};
    border-radius: ${theme.spacing(3)};
    background: ${theme.palette.grey[200]};
    font-family: Poppins;
    font-weight: 600;
    text-decoration: none;
    
    &.MuiTypography-root {
      color: ${theme.palette.secondary.main};
      font-size: 12px;
      font-family: Poppins;
      font-size: 12px;
      font-weight: 600;

      &:hover {
        text-decoration: underline ${theme.palette.primary.light};
      };
      &:active { 
        color: ${theme.palette.primary.light};;
      };
    }
  `
)

const TagGrey = ({ children }) => {
  return (
    <TagBox
      component={Link}
      to={'/404'}>
      {children}
    </TagBox>
  )
}

export default TagGrey
