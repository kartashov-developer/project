import React from 'react';
import { Box, Button, Typography, styled } from '@mui/material';

import { Link } from 'react-router-dom';

const StyledBannerBox = styled(Box)(
  () => `
    width: 420px;
    height: 280px;
    padding: 48px 0px 32px 32px;
    margin: 1px 0px;
    display: flex;
    flex-direction: column;
    gap: 90px;
    border: 1px solid #000;
    border-radius: 12px;
  `
);

const Banner = ({ title, backgroundImage, author }) => {
  return (
    <StyledBannerBox sx={{
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
    }}>
      <Box>
        <div></div>
        <Typography variant='subtitle1' color='initial' pb={1}>
          written by '{author}'
        </Typography>
        <Typography variant='h3' color='initial' fontWeight={'600'}>
          {title}
        </Typography>
      </Box>
      <Box>
        <Button
          component={Link}
          to={'/blog'}
          variant='outlined'
          endIcon={
            <img src='../../../public/static/images/icons/right-arrow.svg' />
          }
        >
          Read receipes
        </Button>
      </Box>
    </StyledBannerBox>
  );
};

export default Banner;
