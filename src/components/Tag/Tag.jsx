import { Box, Button, Typography, styled } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const TagBox = styled(Box)(
  ({ theme }) => `
    padding: ${theme.spacing(0, 2)};
    position: absolute;
    border-radius: ${theme.spacing(3)};
    color: ${theme.palette.primary.main};
    background: ${theme.palette.primary.lightest};
    font-family: Poppins;
    font-weight: 600;
    text-decoration: none;
    top: 24px;
    left: 24px;

    &:hover {
      text-decoration: underline;
    }

    &:active {
      color: ${theme.palette.primary.darker};;
    }
  `
);

const Tag = ({ children }) => {
  return (
    <Box sx={{ position: 'relative' }}>
      <TagBox component={Link} to={'/404'}>
        <Typography
          sx={{
            fontSize: '12px',
            fontWeight: 600
          }}
        >
          {children}
        </Typography>
      </TagBox>
    </Box>
  );
};

export default Tag;
