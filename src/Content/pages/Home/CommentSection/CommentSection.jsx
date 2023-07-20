import React from 'react'
import SectionHeader from '../../../../components/SectionHeader/SectionHeader'
import CardProduct from '../../../../components/CardProduct/CardProduct'
import { Box, Container, styled } from '@mui/material'

const StyledContainer = styled(Container)(
  () => `
    display: flex;
    flex-direction: column;
    padding: 64px 0px;
  `
)

const CommentSection = () => {
  return (
    <StyledContainer disableGutters>
      <SectionHeader sectionHeader={'Section Headline'} buttonText={'Go Next'} />
      <Box sx={{ display: 'flex', gap: '32px', pt: '32px' }}>
        <CardProduct productTitle='Hello' productDescription='Atque doloremque praesentium ab aspernatur similique amet.' productPrice='12.32' />
        <CardProduct productTitle='Hello' productDescription='Atque doloremque praesentium ab aspernatur similique amet.' productPrice='12.32' />
        <CardProduct productTitle='Hello' productDescription='Atque doloremque praesentium ab aspernatur similique amet.' productPrice='12.32' />
        <CardProduct productTitle='Hello' productDescription='Atque doloremque praesentium ab aspernatur similique amet.' productPrice='12.32' />
      </Box>
    </StyledContainer>
  )
}

export default CommentSection
