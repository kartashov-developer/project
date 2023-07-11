// Router imports
import { useRoutes } from 'react-router-dom'
import router from 'src/router'
// MUI imports
import { CssBaseline } from '@mui/material'
import ThemeProvider from './theme/ThemeProvider'

function App() {
  const content = useRoutes(router)
  return (
    <>
      <CssBaseLine />
      {content}
    </>
  )
}

export default App
