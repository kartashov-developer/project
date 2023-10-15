import React from 'react';

import { Divider, Container, Box, Typography, Stack } from '@mui/material';
import { Breadcrumb2 } from '../../../components/Breadcrumbs/Breadcrumb2';

import { Link } from 'react-router-dom';
// -----------------------------------------------------------------------------
const categoryName = [
  'Bakery',
  'Fruits',
  'Vegetables',
  'Meat',
  'Drinks',
  'Kitchen',
  'Fish',
  'Special nutrition',
  'Pharmacy',
  'Baby'
]

const Categories = () => {

  return (
    <>
      <Container disableGutters fullWidth sx={{ padding: '6px 0 0 0' }}>
        <Breadcrumb2 mainPage={'Categories'} />
        <Box sx={{ p: '16px 0 16px 0' }}>
          <Typography variant='h1' sx={{ p: '16px 0 25px 0' }}>
            All Categories
          </Typography>
        </Box>
      </Container>
      <Stack sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {categoryName.map((category) => (
          <Typography
            component={Link}
            to={`/categories/${categoryName}`}
            variant='h4'
            sx={{
              color: 'primary.main'
            }}
          >
            {category}
          </Typography>
        ))}
      </Stack>
      <Divider sx={{ mb: 7, mt: 7 }} />
    </>
  );
};

export default Categories;
