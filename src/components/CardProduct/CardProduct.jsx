import React from 'react'
import { Card, CardMedia, Box, CardContent, Typography, CardActions, Button, styled } from '@mui/material'
import '../../../public/static/images/placeholders/Image-light.jpg'

const CardWrapper = styled(Card)(
  ({ theme }) => `
    min-width: '275px';
    border: 1px solid ${theme.palette.secondary.lighter};
    border-radius: 12px;
  `
)

const CardProduct = () => {
  return (
    <>
      <CardWrapper>
        <CardMedia
          component="img"
          height="180px"
          width="269px"
          image="../../../public/static/images/placeholders/Image-light.jpg"
          alt="Card Content"
          sx={{ padding: '16px 16px 16px 16px' }}
        />
        {/* <CardHeader>{productTitle}</CardHeader> */}
        <CardContent sx={{
          p: '16px',
          display: 'flex',
          flexDirection: 'column',
        }}>
          <Box>
            <Typography variant='h5'>Product Title</Typography>
            <Typography variant='subtitle1' color={'#575757'}>
              Space for a small product description
            </Typography>
          </Box>
        </CardContent>
        <CardActions
          sx={{
            p: '16px',
            display: 'flex',
            flexDirection: 'row',
            gap: '55px'
          }}
        >
          <Typography variant='h4'>
            10.48 USD
          </Typography>
          <Button variant='contained' size='small'>
            Buy now
          </Button>
        </CardActions>
      </CardWrapper>
    </>
  )
}

export default CardProduct
