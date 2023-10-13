import React from 'react';

import { Container, styled } from '@mui/material';
//----------------------------------------------------------------------------
const StyledMainContainer = styled(Container)(
  () => `
    display: flex;
    flex-direction: row;
    gap: 32px;
    padding: 45px 0px 0px 0px;
  `
);

const Block = ({ children }) => {
  return (
    <StyledMainContainer disableGutters maxWidth>
      {children}
    </StyledMainContainer>
  );
};

export default Block;
