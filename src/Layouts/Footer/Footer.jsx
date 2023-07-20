import { Container, Stack, Typography, styled } from '@mui/material'
import React from 'react'
import CategoryLink from '../../components/CategoryLink/CategoryLink'
import { footerMenu } from '../../db/footerMenu'
import { Link } from 'react-router-dom'
// ---------------------------------------------------------------------------
const WrappedContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'start',
  marginBottom: theme.spacing(12)
}))

const StackColumn = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(4)
}))

const StyledCategoryLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  textDecorationLine: 'none',
  color: theme.palette.primary.main,
  fontFamily: 'Open Sans',
  fontWeight: 400,

  '&:hover': {
    textDecoration: `underline ${theme.palette.primary.main}`,
  },
  '&:active': {
    textDecoration: `underline ${theme.palette.primary.darker}`,
    color: theme.palette.primary.darker,
  }
}))

const StyledHeaderTypography = styled(Typography)(({ theme }) => ({
  fontFamily: 'Poppins',
  fontWeight: 600
}))

const Footer = () => {
  return (
    <Container disableGutters>
      <WrappedContainer maxWidth='lg' disableGutters>
        {footerMenu.map((menuTitle) => (
          <StackColumn>
            <StyledHeaderTypography
              variant='h4'
              key={menuTitle.id}
            >
              {menuTitle.columnName}
            </StyledHeaderTypography>
            {menuTitle.columnLinks.map((link) => (
              <StyledCategoryLink
                key={link.linkName}
                href="/404"
              >
                {link.linkName}
              </StyledCategoryLink>))}
          </StackColumn>
        ))}
      </WrappedContainer>
      <Container disableGutters>
        <Typography variant='h4' fontWeight={'600'}>Product tags</Typography>
      </Container>
    </Container>
  )
}

export default Footer
