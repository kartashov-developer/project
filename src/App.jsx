import React from 'react'
// Router imports
import { useRoutes } from 'react-router-dom'
import routes from './router'
// MUI imports
import { CssBaseline } from '@mui/material'
// import ThemeProvider from './theme/ThemeProvider'

function App() {
  const content = useRoutes(routes)
  return (
    <>
      <CssBaseline />
      {content}
    </>
  )
}

export default App
