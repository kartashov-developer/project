import React from 'react';
import { useParams } from 'react-router-dom';

import { Divider, Container, Box, Typography, Stack } from '@mui/material';
import CategoryIcon from '@mui/icons-material/Category';

import { Breadcrumb3 } from '../../../components/Breadcrumbs/Breadcrumb3';

const CategoriesDetail = () => {
  const { category } = useParams();

  return (
    <>
      <Container disableGutters fullWidth sx={{ padding: '6px 0 0 0' }}>
        <Breadcrumb3
          mainPage={category}
          page1={'Categories'}
          link1={'/categories'}
          icon={<CategoryIcon />}
        />
        <Box sx={{ p: '16px 0 16px 0' }}>
          <Typography variant='h1' sx={{ p: '16px 0 25px 0' }}>
            Category: {category}
          </Typography>
        </Box>
      </Container>

      <Divider sx={{ mb: 7, mt: 7 }} />
    </>
  );
};

export default CategoriesDetail;
