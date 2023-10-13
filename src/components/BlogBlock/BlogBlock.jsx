import { Box, Typography, styled } from '@mui/material';
import React from 'react';
import TextDate from '../TextDate/TextDate';
import TagRelative from '../TagRelative/TagRelative';
import { Link } from 'react-router-dom';

const StyledHeader = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  pb: theme.spacing(2),
  textDecoration: 'none',
  fontWeight: 600,
  color: theme.palette.secondary.main,
  textDecoration: 'none',

  '&:hover': {
    textDecoration: 'underline'
  },
  '&:active': {
    color: theme.palette.secondary.light,
    textDecoration: `underline ${theme.palette.primary.light}`
  }
}));

const BlogBlock = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        alignItems: 'flex-start',
        width: '269px'
      }}
    >
      <Box
        sx={{
          height: '180px',
          width: '269px',
          background:
            'url("../../../public/static/images/placeholders/RectangleMedium.jpg"), lightgray 50% / cover no-repeat'
        }}
      />
      <TagRelative>Vegetable</TagRelative>
      <StyledHeader variant='h4' component={Link} to='/404'>
        Which vegetable your family will love and want’s eat each day
      </StyledHeader>
      <TextDate author={'AuthorAuthor'} date={'15.05.2012'} />
    </Box>
  );
};

export default BlogBlock;
