// MUI
import { Container, MenuItem, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { Link } from 'react-router-dom';

import { CategoriesButton } from '../../components/CategoriesButton/CategoriesButton';
// DB
import { navbarMenu } from '../../db/navbarMenu';
// -----------------------------------------------------------------------------
/* Styled Components */
const ContainerWrapper = styled(Container)(
  ({ theme }) => `
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 120px;
    width: 100%;
    padding: 16px 0px 16px 0px;
    margin: 7px;
    background-color: ${theme.palette.grey[0]};
  `
);

/* Navbar Component */
export default function Navbar() {
  return (
    <ContainerWrapper disableGutters>
      <CategoriesButton
        buttonText={'Bakery'}
        children={navbarMenu
          .filter((item) => {
            return item.categoryName === 'Bakery';
          })
          .map((item) => {
            return (
              <MenuItem key={item.id}>
                <Typography
                  variant='h5'
                  component={Link}
                  to={`/tags/${item.title}`}
                >
                  {item.title}
                </Typography>
              </MenuItem>
            );
          })}
      />

      {/* Fruits */}
      <CategoriesButton
        buttonText={'Fruits'}
        children={navbarMenu
          .filter((item) => {
            return item.categoryName === 'Fruits';
          })
          .map((item) => {
            return (
              <MenuItem key={item.id}>
                <Typography
                  variant='h5'
                  component={Link}
                  to={`/tags/${item.title}`}
                >
                  {item.title}
                </Typography>
              </MenuItem>
            );
          })}
      />
      {/* Vegetables */}
      <CategoriesButton
        buttonText={'Vegetables'}
        children={navbarMenu
          .filter((item) => {
            return item.categoryName === 'Vegetables';
          })
          .map((item) => {
            return (
              <MenuItem key={item.id}>
                <Typography
                  variant='h5'
                  component={Link}
                  to={`/tags/${item.title}`}
                >
                  {item.title}
                </Typography>
              </MenuItem>
            );
          })}
      />
      {/* FastFood */}
      <CategoriesButton
        buttonText={'Fastfood'}
        children={navbarMenu
          .filter((item) => {
            return item.categoryName === 'FastFood';
          })
          .map((item) => {
            return (
              <MenuItem key={item.id}>
                <Typography
                  variant='h5'
                  component={Link}
                  to={`/tags/${item.title}`}
                >
                  {item.title}
                </Typography>
              </MenuItem>
            );
          })}
      />
      {/* Meat */}
      <CategoriesButton
        buttonText={'Meat'}
        disabled={'disabled'}
        children={navbarMenu
          .filter((item) => {
            return item.categoryName === 'Meat';
          })
          .map((item) => {
            return (
              <MenuItem key={item.id}>
                <Typography
                  variant='h5'
                  component={Link}
                  to={`/tags/${item.title}`}
                >
                  {item.title}
                </Typography>
              </MenuItem>
            );
          })}
      />
      {/* Fish */}
      <CategoriesButton
        buttonText={'Fish'}
        children={navbarMenu
          .filter((item) => {
            return item.categoryName === 'Fish';
          })
          .map((item) => {
            return (
              <MenuItem key={item.id}>
                <Typography
                  variant='h5'
                  component={Link}
                  to={`/tags/${item.title}`}
                >
                  {item.title}
                </Typography>
              </MenuItem>
            );
          })}
      />
      {/* Other */}
      <CategoriesButton
        buttonText={'Other'}
        children={navbarMenu
          .filter((item) => {
            return item.categoryName === 'Other';
          })
          .map((item) => {
            return (
              <MenuItem key={item.id}>
                <Typography
                  variant='h5'
                  component={Link}
                  to={`/tags/${item.title}`}
                >
                  {item.title}
                </Typography>
              </MenuItem>
            );
          })}
      />
    </ContainerWrapper>
  );
}
