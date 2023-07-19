import React from 'react'
// Router
import { Outlet } from 'react-router'
// MUI
import { Container } from '@mui/material/'
// Components
import Info from './Info/Info'
import Search from './Search/Search'
import Navbar from './Navbar/Navbar'
import Line from './Line/Line'

export default function BaseLayout() {
  return (
    <>
      {/* Background */}
      <Container
        maxWidth
        disableGutters
        sx={{
          position: 'absolute',
          backgroundColor: '#F9F9F9',
          height: '100%',
          // width: '100%',
          zIndex: -1000,
        }}></Container>
      {/* Line for Navbar */}
      <Container
        disableGutters
        sx={{ position: 'relative' }}>
        <Line />
      </Container>
      {/* Main Layout */}
      <Container
        maxWidth='lg'
        disableGutters
        sx={{
          backgroundColor: '#FFFFFF',
          boxShadow: "0px 0px 5px 1px rgba(227, 224, 224, 1)"
        }}>
        <Container disableGutters
          sx={{
            boxShadow: 1,
            padding: '0px 45px'
          }}>
          <Info />
          <Search />
          <Navbar />
          <Outlet />
        </Container>
      </Container>

    </>
  )
}
