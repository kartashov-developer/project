import React from 'react';

import { Box, Button, Divider, Typography, styled } from '@mui/material';
import { Link } from 'react-router-dom';

const ButtonGoHome = styled(Button)(
  () => `
    text-transform: uppercase;
    font-size: 25px;
    padding: 2px 10px;
  `
);

const StyledBox404 = styled(Box)(
  () => `
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0px;
    gap: 20px;
  `
);

const Status404 = () => {
  return (
    <StyledBox404>
      <img
        src='../../../../public/static/images/status/Status404.jpg'
        alt='404 Page not Found'
        width='60%'
      />
      <Divider width={'55%'} />
      <Typography variant='h2'>No such page. Maybe, go home?</Typography>
      <ButtonGoHome variant='contained' component={Link} to={'/'}>
        Go home
      </ButtonGoHome>
      <Divider width={'55%'} />
      {/* <br /> */}
    </StyledBox404>
  );
};

export default Status404;
