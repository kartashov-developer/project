import React from 'react';
import SectionHeader from '../../../../components/SectionHeader/SectionHeader';

import { Box, Container, Typography, styled } from '@mui/material';

import AvatarText from '../../../../components/AvatarText/AvatarText';
import Tag from '../../../../components/Tag/Tag';
import { Link } from 'react-router-dom';
import BlogBlock from '../../../../components/BlogBlock/BlogBlock';
import BlogBlockRow from '../../../../components/BlogBlockRow/BlogBlockRow';

const BlogPostContainer = styled(Container)(
  () => `
    display: flex;
    flex-direction: column;
  `
);

const WrapperContainer = styled(Container)(
  ({ theme }) => `
    display: flex;
    gap: ${theme.spacing(8)};
    padding-top: ${theme.spacing(9)};
  `
);

const StyledBlogBox = styled(Box)(
  ({ theme }) => `
    width: 469px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    border-radius: ${theme.spacing(3)};
    padding: ${theme.spacing(6)};
    background: url("../../../../public/static/images/placeholders/RectangleBig.jpg"), lightgray 50% / cover no-repeat;
  `
);

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.common.white,
  pb: theme.spacing(2),
  textDecoration: 'none',

  '&:hover': {
    textDecoration: 'underline'
  },
  '&:active': {
    color: theme.palette.secondary.lighter,
    textDecoration: `underline ${theme.palette.primary.light}`
  }
}));

const BlogPosts = () => {
  return (
    <Container sx={{ padding: '64px 0' }}>
      <SectionHeader
        sectionHeader={'Read our Blog posts'}
        buttonText={'Go to Blog'}
      />
      <WrapperContainer disableGutters>
        <BlogPostContainer disableGutters>
          <Tag>Dinner tips</Tag>
          <StyledBlogBox>
            <StyledTypography
              variant='h3'
              sx={{ color: 'white', pb: '8px' }}
              component={Link}
              to={'/404'}
            >
              Our chef tips for a great and tasty dinner ready in 20 minutes
            </StyledTypography>
            <AvatarText
              avatarSrc={'../../../public/static/images/avatars/avatar1.svg'}
              author={'Author Author Author'}
              date={'16.08.2023'}
              white
            />
          </StyledBlogBox>
        </BlogPostContainer>
        <BlogBlock />

        <Container
          disableGutters
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <BlogBlockRow
            srcImage={
              'url("../../../public/static/images/placeholders/RectangleSmall1.png"), lightgray 50% / cover no-repeat'
            }
          />
          <BlogBlockRow
            srcImage={
              'url("../../../public/static/images/placeholders/RectangleSmall2.png"), lightgray 50% / cover no-repeat'
            }
          />
          <BlogBlockRow
            srcImage={
              'url("../../../public/static/images/placeholders/RectangleSmall3.png"), lightgray 50% / cover no-repeat'
            }
          />
        </Container>
      </WrapperContainer>
    </Container>
  );
};

export default BlogPosts;
