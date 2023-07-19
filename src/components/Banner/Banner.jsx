import React from 'react'
import { Box, Button, Typography, styled } from '@mui/material'

const StyledBannerBox = styled(Box)(
  () => `
    width: 419px;
    height: 280px;
    padding: 48px 0px 32px 32px;
    margin: 1px 0px;
    display: flex;
    flex-direction: column;
    gap: 90px;
    border: 1px solid #000;
    border-radius: 12px;
  `
)

const Banner = () => {
  return (
    <StyledBannerBox>
      <Box>
        <div></div>
        <Typography variant="subtitle1" color="initial" pb={1}>
          Banner focus
        </Typography>
        <Typography variant="h3" color="initial" fontWeight={'600'}>
          Space for heading
        </Typography>
      </Box>
      <Box>
        <Button
          variant='outlined'
          endIcon={
            <img src='../../../public/static/images/icons/right-arrow.svg'
            />
          }
        >
          Read receipes
        </Button>
      </Box>
    </StyledBannerBox>
  )
}

export default Banner
