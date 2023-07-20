import { Typography, Box, styled, Container } from '@mui/material'
import React from 'react'
import TextDate from '../TextDate/TextDate'
import { Link } from 'react-router-dom'

const ImageBox = styled(Container)(
  ({ srcImage, theme }) => `
    width: 96px;
    height: 96px;
    background: ${srcImage};
    border-radius: ${theme.spacing(3)};
  }
  `
)

const StyledLinkTitle = styled(Typography)(({ theme }) => ({
  width: 225,
  paddingBottom: theme.spacing(3),
  color: theme.palette.secondary.main,
  textDecoration: 'none',

  '&:hover': {
    textDecoration: 'underline',
  },
  '&:active': {
    color: theme.palette.secondary.light,
    textDecoration: `underline ${theme.palette.primary.light}`,
  }
}))

const BlogBlockRow = ({ srcImage }) => {
  return (
    <Box sx={{
      display: 'flex',
      gap: '24px'
    }}>
      <Box sx={{ width: '225px' }}>
        <StyledLinkTitle
          variant='h5'
          component={Link}
          to={'/404'}
        >
          Salat is kinda good start to your morning routines
        </StyledLinkTitle>
        <TextDate author={'Author Author'} date={'15.05.2012'} />
      </Box>
      <ImageBox srcImage={srcImage} />
    </Box>
  )
}

export default BlogBlockRow
