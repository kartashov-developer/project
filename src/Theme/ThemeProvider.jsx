import React, { useState } from 'react'
import { ThemeProvider } from '@mui/material'
import { PureLightTheme } from './PureLightTheme.jsx'

const themeMap = {
  PureLightTheme,
}

function themeCreator(theme) {
  return themeMap[theme]
}

export const ThemeContext = React.createContext((themeName) => {})

const ThemeProviderWrapper = (props) => {
  const curThemeName = localStorage.getItem('appTheme') || 'PureLightTheme'
  const [themeName, _setThemeName] = useState(curThemeName)
  const theme = themeCreator(themeName)
  const setThemeName = (themeName) => {
    localStorage.setItem('appTheme', themeName)
    _setThemeName(themeName)
  }

  return (
    <ThemeContext.Provider value={setThemeName}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProviderWrapper
