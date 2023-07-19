import React from 'react'

import { Box, Button, Divider, Typography, styled } from '@mui/material'
import { Link } from 'react-router-dom'

const ButtonGoHome = styled(Button)(
  () => `
    text-transform: uppercase;
    font-size: 25px;
    padding: 2px 10px;
  `
)

const StyledBoxComingSoon = styled(Box)(
  () => `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 0px;
    gap: 20px;
  `
)

const StatusComingSoon = () => {
  return (
    <StyledBoxComingSoon>
      <Typography variant='h1'>Coming Soon!</Typography>
      <img
        src='../../../../public/static/images/status/StatusComingSoon.jpg'
        alt='404 Page not Found'
        width='35%'
      />
      <Divider width={'55%'} />
      <Typography variant='h2'>We're working on implementing the last features before our launch!</Typography>
      <ButtonGoHome
        variant='contained'
        component={Link}
        to={'/'}
      >
        Go home
      </ButtonGoHome>
      <Divider width={'55%'} />
      {/* <br /> */}
    </StyledBoxComingSoon >
  )
}

export default StatusComingSoon
