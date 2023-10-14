import React from 'react';
import { Outlet } from 'react-router';

import { Container, Box, Typography, Divider } from '@mui/material';

import { Breadcrumb2 } from '../../../components/Breadcrumbs/Breadcrumb2';
import TagGrey from '../../../components/TagGrey/TagGrey';
import { tags } from '../../../db/tags';

const Tags = () => {
  return (
    <>
      <Container disableGutters fullWidth sx={{ padding: '6px 0 64px 0' }}>
        <Breadcrumb2 mainPage={'Tags'} />
        <Box
          sx={{
            width: '100%',
            height: '100%',
            p: '16px 0 16px 0'
          }}
        >
          <Typography variant='h1' sx={{ p: '16px 0 8px 0' }}>
            Tags
          </Typography>
        </Box>
        <Container
          disableGutters
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignContent: 'center',
            gap: '16px',
            marginBottom: '16px'
          }}
        >
          {tags.map((tag) => (
            <TagGrey key={tag}>{tag}</TagGrey>
          ))}
        </Container>
        <Divider />
        <Outlet />
      </Container>
    </>
  );
};

export default Tags;
