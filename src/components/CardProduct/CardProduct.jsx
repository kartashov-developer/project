import React from 'react';
import {
  Card,
  CardMedia,
  Box,
  CardContent,
  Typography,
  CardActions,
  Button,
  styled
} from '@mui/material';
import '../../../public/static/images/placeholders/Image-light.jpg';
//----------------------------------------------------------------------------
const CardWrapper = styled(Card)(
  ({ theme }) => `
    min-width: 236px;
    border: 1px solid ${theme.palette.secondary.lighter};
    border-radius: 12px;
    positon: relative;
    max-width: 268px;
  `
);

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
    padding: 2px;
    width: 45px;
    position: absolute;
    z-index: 1000;
    top: 15px;
    left: 15px;
  `
);
//----------------------------------------------------------------------------
const CardProduct = ({
  productTitle,
  productDescription,
  productPrice,
  discount,
  backgroundImage
}) => {
  return (
    <>
      <CardWrapper>
        {discount ? (
          <Box sx={{ position: 'relative' }}>
            <StyledBadge> - {discount} %</StyledBadge>
          </Box>
        ) : null}
        <CardMedia
          component='img'
          height='180px'
          width='269px'
          sx={{
            zIndex: 0,
            backgroundImage: `url(${backgroundImage})`
          }}
        />
        <CardContent
          sx={{
            p: '16px',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Box>
            <Typography variant='h5'>{productTitle}</Typography>
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
            gap: '60px'
          }}
        >
          <Typography variant='h4'>{productPrice} USD</Typography>
          <Button variant='contained' size='small'>
            Buy now
          </Button>
        </CardActions>
      </CardWrapper>
    </>
  );
};

export default CardProduct;
