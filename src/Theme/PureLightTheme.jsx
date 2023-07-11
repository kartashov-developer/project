import { alpha, createTheme, lighten, darken } from '@mui/material'
import { color } from '@mui/system'

const themeColors = {
  primary: '#6A983C',
  secondary: '#151515',
  success: '#57CA22',
  warning: '#E5704B',
  error: '#FF1943',
  info: '#33C2FF',
  white: '#ffffff',
}

const colors = {
  primary: {
    darker: '#46760A',
    main: '#6A983C',
    light: '#92C064',
    lighter: '#C8DEB3',
    lightest: '#F4F8EC',
  },
  secondary: {
    darker: '#575757',
    main: '#151515',
    light: '#A9A9A9',
    lighter: '#D1D1D1',
    lightest: '#EBEBEB',
  },
  success: {
    lighter: alpha(themeColors.success, 0.1),
    light: lighten(themeColors.success, 0.3),
    main: themeColors.success,
    dark: darken(themeColors.success, 0.2),
  },
  warning: {
    darker: '#E5704B',
    main: '#C7522D',
    light: '#EB8D70',
    lighter: '#F7C6B7',
    lightest: '#FFF1ED',
  },
  error: {
    lighter: alpha(themeColors.error, 0.1),
    light: lighten(themeColors.error, 0.3),
    main: themeColors.error,
    dark: darken(themeColors.error, 0.2),
  },
  info: {
    lighter: alpha(themeColors.info, 0.1),
    light: lighten(themeColors.info, 0.3),
    main: themeColors.info,
    dark: darken(themeColors.info, 0.2),
  },
}

export const PureLightTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1840,
    },
  },
  spacing: 9,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        'html, body': {
          width: '100%',
          height: '100%',
        },
        body: {
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100%',
          width: '100%',
          flex: 1,
        },
        '#root': {
          width: '100%',
          height: '100%',
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
        },
        html: {
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100%',
          width: '100%',
          MozOsxFontSmoothing: 'grayscale',
          WebkitFontSmoothing: 'antialiased',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: colors.primary.main,
          fontSize: '12px',
          textDecorationColor: colors.primary.main,
          textDecoration: 'none',
          cursor: 'pointer',

          '&:hover, &.MuiSelected': {
            textDecoration: 'underline',
          },
          '&:active': {
            color: colors.primary.darker,
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          fontWeight: 'bold',
          textTransform: 'none',
          fontSize: '15px',
          borderRadius: '12px',
        },
        endIcon: {
          marginRight: -6,
        },
        startIcon: {
          marginLeft: 6,
        },
        outlinedPrimary: {
          backgroundColor: 'themeColors.white',
          border: '2px solid ' + colors.primary.light,
          color: themeColors.secondary,

          '&:hover, &.MuiSelected': {
            backgroundColor: colors.primary.lighter,
            border: '2px solid ' + colors.primary.main,
          },
          '&:active': {
            backgroundColor: colors.primary.light,
            border: '2px solid ' + darken(colors.primary.darker, 0),
          },
        },
        containedPrimary: {
          backgroundColor: colors.primary.main,
          color: themeColors.white,
          border: '2px solid ' + colors.primary.darker,

          '&:hover, &.MuiSelected': {
            backgroundColor: colors.primary.darker,
            border: '2px solid ' + darken(colors.primary.darker, 0.3),
          },
          '&:active': {
            backgroundColor: darken(colors.primary.darker, 0.2),
            border: '2px solid ' + darken(colors.primary.darker, 0.5),
          },
        },
        textPrimary: {
          backgroundColor: '#F5F5F5',
          color: colors.secondary.main,
          border: 'none',

          '&:hover, &.MuiSelected': {
            backgroundColor: colors.secondary.lightest,
          },
          '&:active': {
            backgroundColor: colors.secondary.lighter,
          },
        },
        sizeSmall: {
          padding: '12px',
        },
        sizeMedium: {
          padding: '12px 16px',
        },
        sizeLarge: {
          padding: '12px 48px',
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          h1: 'h1',
          h2: 'h2',
          h3: 'div',
          h4: 'div',
          h5: 'div',
          h6: 'div',
          subtitle1: 'div',
          subtitle2: 'div',
          body1: 'div',
          body2: 'div',
        },
      },
      styleOverrides: {
        gutterBottom: {
          marginBottom: 4,
        },
        paragraph: {
          fontSize: 17,
          lineHeight: 1.7,
        },
      },
    },
  },
  typography: {
    fontFamily:
      '"Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    h1: {
      fontWeight: 700,
      fontSize: 32,
    },
    h2: {
      fontWeight: 700,
      fontSize: 26,
    },
    h3: {
      fontWeight: 700,
      fontSize: 22,
    },
    h4: {
      fontWeight: 700,
      fontSize: 18,
    },
    h5: {
      fontWeight: 700,
      fontSize: 15,
    },
    body1: {
      fontSize: 14,
    },
    button: {
      fontWeight: 600,
    },
    caption: {
      fontSize: 18,
      textTransform: 'uppercase',
    },
    subtitle1: {
      fontSize: 12,
    },
  },
  shadows: [
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
  ],
})
