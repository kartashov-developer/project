import { Container, Box, Typography, Divider } from '@mui/material';
import { Breadcrumb2 } from '../../../components/Breadcrumbs/Breadcrumb2';
import { ListItemCallout } from '../../../components/ListItemCallout/ListItemCallout';

import BlogBlockBig from '../../../components/BlogBlockBig/BlogBlockBig';

import SideMenu from '../../../components/SideMenu/SideMenu';
import CategoryLink from '../../../components/CategoryLink/CategoryLink';
import { blogMenu } from '../../../db/blogMenu';

import BlogBlockRowSmall from '../../../components/BlogBlockRowSmall/BlogBlockRowSmall';

import AcUnitIcon from '@mui/icons-material/AcUnit';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import ReceiptIcon from '@mui/icons-material/Receipt';
import PaidIcon from '@mui/icons-material/Paid';

const obj = {
  string: 'string',
  boo: true,
  age: 32
};

export const Blog = () => {
  // Filter the category menu. I need menu: 'block1'.
  const filteredBlockMenuCategories = blogMenu.filter(
    (category) => category.menu === 'archieves'
  );

  return (
    <Container disableGutters fullWidth sx={{ padding: '6px 0 64px 0' }}>
      <Breadcrumb2 mainPage={'Blog'} />
      <Box sx={{ p: '16px 0 16px 0' }}>
        <Typography variant='h1' sx={{ p: '16px 0 25px 0' }}>
          Blog
        </Typography>
      </Box>
      {/* Blog Posts Big */}
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '30px',
          mb: 20
        }}
      >
        <BlogBlockBig
          tag={'Vegetables'}
          text={
            'This is a space for your blog headline, it can be long don’t worry about that'
          }
        />
        <BlogBlockBig tag={'Receipt'} text={'asdf'} />
      </Container>
      {/* Other */}
      <Container>
        {/* First Row */}
        <Box sx={{ display: 'flex', mb: '32px' }}>
          <Box sx={{ mb: '48px' }}>
            <SideMenu buttonText={false} titleText={'Achieves'}>
              {filteredBlockMenuCategories.map((category) => (
                <CategoryLink key={category.id} linkUrl={'/404'}>
                  {category.categoryName}
                </CategoryLink>
              ))}
            </SideMenu>
          </Box>
          <Box
            sx={{
              display: 'flex',
              gap: '32px'
            }}
          >
            <BlogBlockRowSmall
              tag={'Vegetables'}
              srcImage={
                '../../../../public/static/images/placeholders/RectangleMedium.jpg'
              }
              text={'Space for your heding is here, write what you need'}
            />
            <BlogBlockRowSmall
              tag={'Vegetables'}
              srcImage={
                '../../../../public/static/images/placeholders/RectangleMedium.jpg'
              }
              text={'Space for your heding is here, write what you need'}
            />
            <BlogBlockRowSmall
              tag={'Vegetables'}
              srcImage={
                '../../../../public/static/images/placeholders/RectangleMedium.jpg'
              }
              text={'Space for your heding is here, write what you need'}
            />
          </Box>
        </Box>
        {/* Second Row */}
        <Box sx={{ display: 'flex', mb: '32px' }}>
          <Box sx={{ mb: '48px' }}>
            <SideMenu buttonText={false} titleText={'Achieves'}>
              {filteredBlockMenuCategories.map((category) => (
                <CategoryLink key={category.id} linkUrl={'/404'}>
                  {category.categoryName}
                </CategoryLink>
              ))}
            </SideMenu>
          </Box>
          <Box
            sx={{
              display: 'flex',
              gap: '32px'
            }}
          >
            <BlogBlockRowSmall
              tag={'Vegetables'}
              srcImage={
                '../../../../public/static/images/placeholders/RectangleMedium.jpg'
              }
              text={'Space for your heding is here, write what you need'}
            />
            <BlogBlockRowSmall
              tag={'Vegetables'}
              srcImage={
                '../../../../public/static/images/placeholders/RectangleMedium.jpg'
              }
              text={'Space for your heding is here, write what you need'}
            />
            <BlogBlockRowSmall
              tag={'Vegetables'}
              srcImage={
                '../../../../public/static/images/placeholders/RectangleMedium.jpg'
              }
              text={'Space for your heding is here, write what you need'}
            />
          </Box>
        </Box>
        {/* Third Row */}
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ mb: '48px' }}>
            <SideMenu buttonText={false} titleText={'Achieves'}>
              {filteredBlockMenuCategories.map((category) => (
                <CategoryLink key={category.id} linkUrl={'/404'}>
                  {category.categoryName}
                </CategoryLink>
              ))}
            </SideMenu>
          </Box>
          <Box
            sx={{
              display: 'flex',
              gap: '32px',
              mb: '20px'
            }}
          >
            <BlogBlockRowSmall
              tag={'Vegetables'}
              srcImage={
                '../../../../public/static/images/placeholders/RectangleMedium.jpg'
              }
              text={'Space for your heding is here, write what you need'}
            />
            <BlogBlockRowSmall
              tag={'Vegetables'}
              srcImage={
                '../../../../public/static/images/placeholders/RectangleMedium.jpg'
              }
              text={'Space for your heding is here, write what you need'}
            />
            <BlogBlockRowSmall
              tag={'Vegetables'}
              srcImage={
                '../../../../public/static/images/placeholders/RectangleMedium.jpg'
              }
              text={'Space for your heding is here, write what you need'}
            />
          </Box>
        </Box>
      </Container>

      <Divider />
    </Container>
  );
};
