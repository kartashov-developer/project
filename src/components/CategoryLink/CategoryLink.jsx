import React from 'react'

import { Link, styled } from '@mui/material'
//----------------------------------------------------------------------------

const StyledCategoryLink = styled(Link)({
  fontSize: '14px',
  textDecoration: 'underline',
  textDecorationLine: 'underline',
  textDecorationThickness: '0.5px'
})

const CategoryLink = ({ linkName }) => {
  return (
    <StyledCategoryLink>{linkName}</StyledCategoryLink>
  )
}

export default CategoryLink
