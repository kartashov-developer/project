import React from 'react'
// Router
import { Outlet } from 'react-router'
// MUI
import { Box, Button, Typography } from '@mui/material/'
// Components
import Info from './Info/Info'

export default function BaseLayout({ children }) {
  return (
    <Box sx={{ height: '100%' }}>
      <Info />
      {/* <SearchContainer />
            <NavbarContainer /> */}
    </Box>
  )
}
