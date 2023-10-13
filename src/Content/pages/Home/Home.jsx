import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from '@mui/material';

import BlockMenuBanners from './BlockMenuBanners/BlockMenuBanners';
import GoodsBlock from './GoodsBlock/GoodsBlock';
import SecondGoodsBlock from './SecondGoodsBlock/SecondGoodsBlock';
import CommentSection from './CommentSection/CommentSection';
import BlogPosts from './BlogPosts/BlogPosts';
//----------------------------------------------------------------------------
const Home = () => {
  return (
    <Container
      disableGutters
      sx={{
        display: 'flex',
        gap: '32px',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <BlockMenuBanners />
      <GoodsBlock />
      <SecondGoodsBlock />
      <CommentSection />
      <BlogPosts />
    </Container>
  );
};

export default Home;
