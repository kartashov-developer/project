import React from 'react'

import { Link, styled } from '@mui/material'
import { Link as LinkRouter } from 'react-router-dom'
//----------------------------------------------------------------------------

const StyledCategoryLink = styled(Link)({
  fontSize: '14px',
  textDecoration: 'underline',
  textDecorationLine: 'underline',
  textDecorationThickness: '0.5px'
})

const CategoryLink = ({ linkUrl, children }) => {
  return (
    <StyledCategoryLink component={LinkRouter} to={linkUrl}>
      {children}
    </StyledCategoryLink>
  )
}

export default CategoryLink
