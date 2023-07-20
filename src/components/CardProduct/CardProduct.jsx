import React from 'react'
import {
  Card,
  CardMedia,
  Box,
  CardContent,
  Typography,
  CardActions,
  Button,
  styled
} from '@mui/material'
import '../../../public/static/images/placeholders/Image-light.jpg'
//----------------------------------------------------------------------------
const CardWrapper = styled(Card)(
  ({ theme }) => `
    min-width: 236px;
    border: 1px solid ${theme.palette.secondary.lighter};
    border-radius: 12px;
    positon: relative;
    max-width: 268px;
  `
)

const StyledBadge = styled(Typography)(
  ({ theme }) => `
    color: ${theme.palette.primary.main};
    background: ${theme.palette.primary.lightest};
    font-family: Poppins;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    border-radius: 12px;
    width: 56px;
    position: absolute;
    z-index: 1000;
    top: 28px;
    left: 30px;
  `
)
//----------------------------------------------------------------------------
const CardProduct = ({
  productTitle,
  productDescription,
  productPrice,
  discount }) => {
  return (
    <>
      <CardWrapper>
        {discount
          ? (
            <Box sx={{ position: 'relative' }}>
              <StyledBadge>- {discount} %</StyledBadge>
            </Box>
          )
          : null
        }
        <CardMedia
          component="img"
          height="180px"
          width="269px"
          image="/static/images/placeholders/Image-light.jpg"
          alt="Card Content"
          sx={{ padding: '16px 16px 16px 16px', zIndex: 0 }}
        />
        <CardContent sx={{
          p: '16px',
          display: 'flex',
          flexDirection: 'column',
        }}>
          <Box>
            <Typography variant='h5'>
              {productTitle}
            </Typography>
            <Typography variant='subtitle1' color={'#575757'}>
              {productDescription}
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
            {productPrice} USD
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
