import { Box, Typography, styled } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const StyledTypography = styled(Typography)(
  ({ theme }) => `
    text-decoration: none;

      &:hover {
        text-decoration: underline;
      }

      &:active {
        text-decoration: none;
        text-decoration: underline ${theme.palette.primary.light};
      }
}
`
);

const TextDate = ({ author, date, white }) => {
  return (
    <Box sx={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Box sx={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <StyledTypography
          color={white ? 'white' : 'black'}
          variant='subtitle1'
          fontFamily={'Open Sans'}
          component={Link}
          to={'/404'}
        >
          {author}
        </StyledTypography>
      </Box>
      <Typography
        color={white ? 'white' : 'black'}
        variant='subtitle1'
        fontFamily={'Open Sans'}
      >
        {date}
      </Typography>
    </Box>
  );
};

export default TextDate;
