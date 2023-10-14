import {
  Container,
  Box,
  Divider,
  Paper,
  Typography,
  ImageList,
  ImageListItem
} from '@mui/material';

import { Breadcrumb2 } from '../../../components/Breadcrumbs/Breadcrumb2';

import { aboutUsText } from '../../../db/aboutUsText';

export const About = () => {
  const filteredItemDataPart1 = itemData.filter(
    (item) => item.part === 'part1'
  );

  const filteredItemDataPart2 = itemData.filter(
    (item) => item.part === 'part2'
  );

  return (
    <Container disableGutters fullWidth sx={{ padding: '6px 0 64px 0' }}>
      <Breadcrumb2 mainPage={'About Us'} />
      <Box
        sx={{
          width: '100%',
          height: '100%',
          p: '16px 0 16px 0'
        }}
      >
        <Typography variant='h1' sx={{ p: '16px 0 25px 0' }}>
          About Us
        </Typography>
        {/* Images 1st part */}
        <ImageList sx={{ width: '100%' }} gap={0} cols={8} rowHeight={180}>
          {filteredItemDataPart1.map((item) => (
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading='lazy'
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      {/* Text */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          mb: 7
        }}
      >
        {aboutUsText.map((paragraph) => (
          <Typography variant='h4' fontWeight={300} key={paragraph.paragraph}>
            {paragraph.paragraph}
          </Typography>
        ))}
      </Box>
      {/* Images 2nd part */}
      <ImageList sx={{ width: '100%' }} gap={0} cols={8} rowHeight={180}>
        {filteredItemDataPart2.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              alt={item.title}
              loading='lazy'
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Divider />
    </Container>
  );
};

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777',
    part: 'part1'
  },
  {
    img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
    part: 'part1'
  },
  {
    img: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445',
    part: 'part1'
  },
  {
    img: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe',
    part: 'part1'
  },
  {
    img: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828',
    part: 'part1'
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1673809798703-6082a015f931',
    part: 'part1'
  },
  {
    img: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543',
    part: 'part1'
  },
  {
    img: 'https://images.unsplash.com/photo-1546554137-f86b9593a222',
    part: 'part1'
  },
  // Part2
  {
    img: 'https://plus.unsplash.com/premium_photo-1663858367001-89e5c92d1e0e',
    part: 'part2'
  },
  {
    img: 'https://images.unsplash.com/photo-1567056602606-6172dedda3ac',
    part: 'part2'
  },
  {
    img: 'https://images.unsplash.com/photo-1536816579748-4ecb3f03d72a',
    part: 'part2'
  },
  {
    img: 'https://images.unsplash.com/photo-1506368249639-73a05d6f6488',
    part: 'part2'
  },
  {
    img: 'https://images.unsplash.com/photo-1560512823-829485b8bf24',
    part: 'part2'
  },
  {
    img: 'https://images.unsplash.com/photo-1593584785033-9c7604d0863f',
    part: 'part2'
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1676234917179-a7b1ca98c984',
    part: 'part2'
  },
  {
    img: 'https://images.unsplash.com/photo-1574484284002-952d92456975',
    part: 'part2'
  }
];
