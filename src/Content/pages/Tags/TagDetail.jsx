import React from 'react';

import { Container, Box, Typography, Divider } from '@mui/material';
import TagIcon from '@mui/icons-material/Tag';

import { Breadcrumb3 } from '../../../components/Breadcrumbs/Breadcrumb3';

const TagDetail = ({ tag }) => {
  return (
    <>
      <Container disableGutters fullWidth pb={3}>
        <Breadcrumb3
          mainPage={tag}
          page1={'Tags'}
          link1={'/tags'}
          icon={<TagIcon />}
        />
        <Box
          sx={{
            width: '100%',
            height: '100%',
            p: '16px 0 16px 0'
          }}
        >
          <Typography variant='h1' sx={{ p: '16px 0 25px 0' }}>
            {tag}
          </Typography>
          <h1>Tag: {tag}</h1>
          <Divider />
        </Box>
      </Container>
    </>
  );
};

export default TagDetail;
