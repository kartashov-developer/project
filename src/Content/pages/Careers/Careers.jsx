
// Components
import { Breadcrumb2 } from '../../../components/Breadcrumbs/Breadcrumb2';
// MUI
import { Container, Grid, Box, Typography, Divider } from '@mui/material';
// MUI icons
import ApartmentIcon from '@mui/icons-material/Apartment';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';

import { CareersTab } from '../../../components/CareersTab/CareersTab';
// -----------------------------------------------------------------------------


/* Careers page-component */
export const Careers = () => {
  return (
    <>
      <Container disableGutters fullWidth sx={{ padding: '6px 0 64px 0' }}>
        {/* Breadcrumb */}
        <Breadcrumb2 mainPage={'Careers'} />
        <Box
          sx={{
            width: '100%',
            height: '100%',
            p: '16px 0 16px 0'
          }}
        >
          {/* Page Title */}
          <Typography
            variant="h1"
            sx={{ p: '16px 0 25px 0' }}
          >
            Careers
          </Typography>
        </Box>
        <Box>
          {/* Main Heading */}
          <Typography fontWeight={800} fontSize={'70px'} mb={4}>
            Join Freshnese!
          </Typography>
          {/* Grid */}
          {/* First Grid Row */}
          <Grid container spacing={2} minHeight={160}>
            {/* Grid Item 1 */}
            <Grid
              xs={4}
              display="flex"
              alignItems="flex-start"
              flexDirection={'column'}
            >
              <ApartmentIcon sx={{ color: 'primary.main', width: '3.3em', height: '3.3em' }} />
              <Typography variant="h4" mb={1}>Large beautiful office</Typography>
              <Typography variant="body2">
                Enjoy a comfortable office emircement with
                the most modern and stylish furnishing.
              </Typography>
            </Grid>
            {/* Grid Item 2 */}
            <Grid
              xs={4}
              display="flex"
              alignItems="flex-start"
              flexDirection={'column'}
            >
              <AutoGraphIcon sx={{ color: 'primary.main', width: '3.3em', height: '3.3em' }} />
              <Typography variant="h4" mb={1}>Great Co-Workers</Typography>
              <Typography variant="body2">
                Work with some of the best tolent in the
                industry and build strong networks with them.
              </Typography>
            </Grid>
            {/* Grid Item 3 */}
            <Grid
              mb={10}
              xs={4}
              display="flex"
              alignItems="flex-start"
              flexDirection={'column'}
            >
              <SchoolIcon sx={{ color: 'primary.main', width: '3.3em', height: '3.3em' }} />
              <Typography variant="h4" mb={1}>Education Opportunities</Typography>
              <Typography variant="body2">
                Get resources for developing your skits and
                knowledge to kickstart your career.
              </Typography>
            </Grid>
            {/* Second Grid Row */}
            {/* Grid Item 4 */}
            <Grid
              xs={4}
              display="flex"
              alignItems="flex-start"
              flexDirection={'column'}
            >
              <LocalHospitalIcon sx={{ color: 'primary.main', width: '3.3em', height: '3.3em' }} />
              <Typography variant="h4" mb={1}>Medical Insurance</Typography>
              <Typography variant="body2">
                We have got you covered, literally!
              </Typography>
            </Grid>
            {/* Grid Item 5 */}
            <Grid
              xs={4}
              display="flex"
              alignItems="flex-start"
              flexDirection={'column'}
            >
              <DevicesOtherIcon sx={{ color: 'primary.main', width: '3.3em', height: '3.3em' }} />
              <Typography variant="h4" mb={1}>Best Gadgets</Typography>
              <Typography variant="body2">
                Pamper the tech savvy in you with
                gadgets and advanced technology
              </Typography>
            </Grid>
            {/* Grid Item 6 */}
            <Grid
              xs={4}
              display="flex"
              alignItems="flex-start"
              flexDirection={'column'}
            >
              <StarIcon sx={{ color: 'primary.main', width: '3.3em', height: '3.3em' }} />
              <Typography variant="h4" mb={1}>Large beautiful office</Typography>
              <Typography variant="body2">
                Enjoy a comfortable office emircement with
                the most modern and stylish furnishing.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        {/* Positions Part */}
        <Box>
          {/* Heading */}
          <Typography textAlign={'center'} variant="h2" mt={20} mb={5}>
            Opened Positions
          </Typography>
          {/* Tabs */}
          <CareersTab />
        </Box>
        <Divider/>
      </Container >
    </>
  )
}
