import React, { useState } from 'react';
import SectionHeader from '../../../../components/SectionHeader/SectionHeader';
import CardProduct from '../../../../components/CardProduct/CardProduct';
import { Grid, Box, Container, Typography, styled } from '@mui/material';

import { products } from '../../../../db/products';

const StyledContainer = styled(Container)(
  () => `
    display: flex;
    flex-direction: column;
    padding: 64px 0px;
  `
);

const ProductContainer = styled(Grid)({
  display: 'flex',
  overflow: 'hidden',
});
const Product = styled(Grid)({
  width: 200,
  height: 200,
  backgroundColor: '#f0f0f0',
  marginRight: 2,
  transition: 'transform 0.3s',
});

const CommentSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    const nextIndex = (currentIndex + 1) % products.length;
    setCurrentIndex(nextIndex);
  };

  const productsToShow = [
    ...products.slice(currentIndex),
    ...products.slice(0, currentIndex)
  ];


  return (
    <StyledContainer disableGutters>
      <SectionHeader
        sectionHeader={'Section Headline'}
        buttonText={'Go Next'}
        onClick={handleNextClick}
      />
      <ProductContainer sx={{ display: 'flex', gap: '32px', pt: '32px' }}>
        {productsToShow.slice(0, 4).map((product, index) => (
          <CardProduct
            key={index}
            productTitle={product.title}
            productDescription={product.description}
            productPrice={product.price}
            backgroundImage={product.backgroundImage}
            discount={product.discount}
          />
        ))}
      </ProductContainer>
    </StyledContainer>
  );
};

export default CommentSection;
