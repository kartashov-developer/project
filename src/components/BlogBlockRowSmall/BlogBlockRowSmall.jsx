import { Typography, Box, styled, Container, Link } from '@mui/material';
import React from 'react';
import TextDate from '../TextDate/TextDate';
import { Link as LinkR } from 'react-router-dom';

const ImageBox = styled(Container)(
  ({ srcImage, theme }) => `
		width: 269px;
		height: 180px;
		flex-shrink: 0;
		background: url(${srcImage});
		border-radius: ${theme.spacing(3)};
    cursor: pointer;
    opacity: 0.9;

    &:hover {
      opacity: 1;
      box-shadow: 5px -4px 24px -5px rgba(34, 60, 80, 0.71);
    }
	}
	`
);

const Tag = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '0px 8px',
  whiteSpace: 'nowrap',
  borderRadius: '12px',
  backgroundColor: theme.palette.primary.lightest,
  margin: '24px 0px 8px 0px'
}));

const LinkStyled = styled(Link)(({ theme }) => ({
  fontFamily: 'Poppins',
  fontSize: '12px',
  fontWeight: 600
}));

const StyledLinkTitle = styled(Typography)(({ theme }) => ({
  width: 225,
  paddingBottom: 8,
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

const BlogBlockRow = ({ srcImage, tag, text }) => {
  return (
    <Box>
      <ImageBox onClick={() => window.open('/404')} srcImage={srcImage} />
      <Tag>
        <LinkStyled>{tag}</LinkStyled>
      </Tag>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}
      >
        <StyledLinkTitle
          variant='h5'
          component={LinkR}
          to={'/404'}
          sx={{
            fontWeight: 600,
            lineHeight: 'normal'
          }}
        >
          {text}
        </StyledLinkTitle>
        <TextDate author={'Author Author'} date={'15.05.2012'} />
      </Box>
    </Box>
  );
};

export default BlogBlockRow;
