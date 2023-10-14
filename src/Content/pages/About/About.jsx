import { Container, Box, Divider, Paper, Typography, ImageList, ImageListItem } from "@mui/material"

import { Breadcrumb2 } from '../../../components/Breadcrumbs/Breadcrumb2'


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
      <Typography
        variant="h1"
        sx={{ p: '16px 0 25px 0' }}
      >
        About Us
      </Typography>
      <ImageList sx={{ width: '100%' }} cols={8} rowHeight={180}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box >
    <Box>
      <Typography>Hello</Typography>
    </Box>
    <Divider />
  </Container>
)
}

export const About = () => {
  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777',
      title: 'Strawberry',
    },
    {
      img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
      title: 'Pizza',
    },
    {
      img: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445',
      title: 'Pancakes',
    },
    {
      img: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe',
      title: 'Salat',
    },
    {
      img: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828',
      title: 'Burger',
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1673809798703-6082a015f931',
      title: 'Soup',
    },
    {
      img: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543',
      title: 'Eggs',
    },
    {
      img: 'https://images.unsplash.com/photo-1546554137-f86b9593a222',
      title: 'Avocado',
    }
  ];
