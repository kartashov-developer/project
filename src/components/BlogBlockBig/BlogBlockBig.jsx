import React from 'react';

import { Box, Typography, styled } from '@mui/material';

import { Link } from 'react-router-dom';

import TextDate from '../TextDate/TextDate';
import AvatarText from '../AvatarText/AvatarText';
import TagBigBlock from '../TagBigBlock/TagBigBlock';

const BoxStyled = styled(Box)(({ }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: 8,
  margin: 24
}));

const StyledHeader = styled(Typography)(({ theme }) => ({
  color: theme.palette.white.main,
  textDecoration: 'none',
  fontWeight: 600,

  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  width: '380px', // Updated width to 380px

  '&:hover': {
    textDecoration: 'underline'
  },
  '&:active': {
    color: theme.palette.secondary.light,
    textDecoration: `underline ${theme.palette.primary.light}`
  }
}));

const BlogBlock = ({ tag, text, author, avatarUrl, backgroundImage, date }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        alignItems: 'flex-start',
        position: 'relative'
      }}
    >
      <Box
        sx={{
          width: '569px',
          height: '400px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundImage: `url(${backgroundImage})`,
          borderRadius: '12px',
          '&:hover': {
            boxShadow: '5px -4px 24px -5px rgba(34, 60, 80, 0.71)',
            borderRadius: '12px',
            cursor: 'pointer'
          }
        }}
      >
        <TagBigBlock tag={tag} />
        <BoxStyled
          sx={{
            position: 'absolute', // Position the BoxStyled component
            bottom: '0' // Align it to the bottom of the container
          }}
        >
          <Box>
            <StyledHeader variant='h3' component={Link} to='/404'>
              {text}
            </StyledHeader>
          </Box>
          <AvatarText
            avatarSrc={avatarUrl}
            white={true}
            author={author}
            date={date}
          />
        </BoxStyled>
      </Box>
    </Box >
  );
};

export default BlogBlock;
