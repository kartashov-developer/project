import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import styled from '@emotion/styled';

const ListStyled = styled(List)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: '3px 0'
}));

export const ListItemCallout = ({ icon, text }) => {
  return (
    <ListStyled>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText
        disableTypography
        sx={{ margin: '0px -25px', fontSize: '17px', fontWeight: '300' }}
      >
        {text}
      </ListItemText>
    </ListStyled>
  );
};
