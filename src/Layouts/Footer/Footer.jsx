import { Box, Container, Stack, Typography, styled } from '@mui/material';
import { footerMenu } from '../../db/footerMenu';
import { Link } from 'react-router-dom';
import TagGrey from '../../components/TagGrey/TagGrey';
import { tags } from '../../db/tags';
// ---------------------------------------------------------------------------
const WrappedContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'start',
  marginBottom: theme.spacing(12)
}));

const StackColumn = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(4)
}));

const StyledCategoryLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  textDecorationLine: 'none',
  color: theme.palette.primary.main,
  fontFamily: 'Open Sans',
  fontWeight: 400,

  '&:hover': {
    textDecoration: `underline ${theme.palette.primary.main}`
  },
  '&:active': {
    textDecoration: `underline ${theme.palette.primary.darker}`,
    color: theme.palette.primary.darker
  }
}));

const StyledHeaderTypography = styled(Typography)(({ theme }) => ({
  fontFamily: 'Poppins',
  fontWeight: 600
}));

const Footer = () => {
  return (
    <Container disableGutters>
      <WrappedContainer maxWidth='lg' disableGutters>
        {footerMenu.map((menuTitle) => (
          <StackColumn>
            <StyledHeaderTypography variant='h4' key={menuTitle.id}>
              {menuTitle.columnName}
            </StyledHeaderTypography>
            {menuTitle.columnLinks.map((link) => (
              <StyledCategoryLink
                component={Link}
                key={link.linkName}
                to={link.linkUrl}
              >
                {link.linkName}
              </StyledCategoryLink>
            ))}
          </StackColumn>
        ))}
      </WrappedContainer>
      <Container
        disableGutters
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}
      >
        <Typography variant='h4' fontWeight={'600'}>
          Product tags
        </Typography>
        <Container
          disableGutters
          maxWidth
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignContent: 'center',
            gap: '16px'
          }}
        >
          {tags.map((tag) => (
            <TagGrey key={tag}>{tag}</TagGrey>
          ))}
        </Container>
      </Container>
    </Container>
  );
};

export default Footer;
