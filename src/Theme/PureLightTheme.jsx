import { alpha, createTheme, lighten, darken } from '@mui/material';
import { color } from '@mui/system';

const themeColors = {
  primary: '#6A983C',
  secondary: '#151515',
  success: '#57CA22',
  warning: '#E5704B',
  error: '#FF1943',
  info: '#33C2FF',
  white: '#ffffff'
};

const colors = {
  primary: {
    darker: '#46760A',
    main: '#6A983C',
    light: '#92C064',
    lighter: '#C8DEB3',
    lightest: '#F4F8EC'
  },
  secondary: {
    darker: '#575757',
    main: '#151515',
    light: '#A9A9A9',
    lighter: '#D1D1D1',
    lightest: '#EBEBEB'
  },
  success: {
    lighter: alpha(themeColors.success, 0.1),
    light: lighten(themeColors.success, 0.3),
    main: themeColors.success,
    dark: darken(themeColors.success, 0.2)
  },
  warning: {
    darker: '#E5704B',
    main: '#C7522D',
    light: '#EB8D70',
    lighter: '#F7C6B7',
    lightest: '#FFF1ED'
  },
  error: {
    lighter: alpha(themeColors.error, 0.1),
    light: lighten(themeColors.error, 0.3),
    main: themeColors.error,
    dark: darken(themeColors.error, 0.2)
  },
  info: {
    lighter: alpha(themeColors.info, 0.1),
    light: lighten(themeColors.info, 0.3),
    main: themeColors.info,
    dark: darken(themeColors.info, 0.2)
  }
};

export const PureLightTheme = createTheme({
  palette: {
    primary: {
      darker: '#46760A',
      main: '#6A983C',
      light: '#92C064',
      lighter: '#C8DEB3',
      lightest: '#F4F8EC'
    },
    secondary: {
      darker: '#575757',
      main: '#151515',
      light: '#A9A9A9',
      lighter: '#D1D1D1',
      lightest: '#EBEBEB'
    },
    success: {
      lighter: alpha(themeColors.success, 0.1),
      light: lighten(themeColors.success, 0.3),
      main: themeColors.success,
      dark: darken(themeColors.success, 0.2)
    },
    warning: {
      darker: '#E5704B',
      main: '#C7522D',
      light: '#EB8D70',
      lighter: '#F7C6B7',
      lightest: '#FFF1ED'
    },
    error: {
      lighter: alpha(themeColors.error, 0.1),
      light: lighten(themeColors.error, 0.3),
      main: themeColors.error,
      dark: darken(themeColors.error, 0.2)
    },
    info: {
      lighter: alpha(themeColors.info, 0.1),
      light: lighten(themeColors.info, 0.3),
      main: themeColors.info,
      dark: darken(themeColors.info, 0.2)
    },
    grey: {
      100: '#F9F9F9',
      200: '#F5F5F5',
      400: '#D1D1D1'
    },
    white: {
      main: themeColors.white
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 660,
      md: 960,
      breakpoint: 1170,
      lg: 1260,
      xl: 1840
    }
  },
  spacing: 4,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        'html, body': {
          width: '100%',
          height: '100%'
        },
        body: {
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100%',
          width: '100%',
          flex: 1
        },
        '#root': {
          width: '100%',
          height: '100%',
          display: 'flex',
          flex: 1,
          flexDirection: 'column'
        },
        html: {
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100%',
          width: '100%',
          MozOsxFontSmoothing: 'grayscale',
          WebkitFontSmoothing: 'antialiased'
        }
      }
    },
    MuiInput: {
      styleOverrides: {
        root: {
          padding: '0px'
        },
        input: {
          padding: '0px'
        }
      }
    },
    MuiInputBase: {
      styleOverrides: {
        input: {
          height: '19px',
          fontSize: '14px'
        }
      }
    },
    MuiBadge: {
      styleOverrides: {
        root: {
          // color: colors.warning.main
        },
        badge: {
          backgroundColor: colors.warning.main,
          color: themeColors.white,
          fontSize: '12px',
          borderRadius: '12px',
          width: '16px',
          boxShadow: '0px 2px 4px 0px rgba(0, 0, 0, 0.15)',
          cursor: 'pointer',

          '&:hover': {
            backgroundColor: lighten(colors.warning.main, 0.15)
          }
        }
      }
    },
    MuiLink: {
      defaultProps: {
        underline: 'hover'
      },
      styleOverrides: {
        root: {
          color: colors.primary.main,
          fontSize: '12px',
          textDecorationColor: colors.primary.main,
          textDecoration: 'none',
          cursor: 'pointer',
          fontFamily: 'Open Sans',
          fontStyle: 'normal',
          lineHeight: 'normal',

          '&:hover, &.MuiSelected': {
            textDecoration: 'underline'
          },
          '&:active': {
            color: colors.primary.darker
          },
          '& .MuiTypography': {
            '&:visited': {
              color: colors.secondary.main
            }
          }
        }
      }
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        root: {
          margin: '12px 0px',
          '& .MuiLink-root, &.MuiLink-underlineHover': {
            fontSize: '14px',
            fontFamily: 'Poppins',
            ':hover': {
              color: colors.secondary.main
            }
          },
          '& .MuiTypography-body1': {
            color: colors.primary.main
          },
          '& .MuiSvgIcon-root': {
            marginRight: '1px',
            fontSize: 'large',
            ':hover': {
              color: colors.secondary.main
            }
          }
        }
      }
    },
    MuiButton: {
      defaultProps: {
        disableRipple: true
      },
      styleOverrides: {
        root: {
          fontWeight: 'bold',
          textTransform: 'none',
          fontSize: '15px',
          borderRadius: '12px'
        },
        endIcon: {
          marginRight: -6
        },
        startIcon: {
          marginLeft: 6
        },
        outlinedPrimary: {
          backgroundColor: 'themeColors.white',
          border: '2px solid ' + colors.primary.light,
          color: themeColors.secondary,
          borderRadius: '12px',

          '&:hover, &.MuiSelected': {
            backgroundColor: colors.primary.lighter,
            border: '2px solid ' + colors.primary.main
          },
          '&:active': {
            backgroundColor: alpha(colors.primary.light, 0.3),
            border: '2px solid ' + alpha(colors.primary.darker, 0.5)
          }
        },
        containedPrimary: {
          backgroundColor: colors.primary.main,
          color: themeColors.white,
          border: '2px solid ' + colors.primary.darker,
          borderRadius: '12px',

          '&:hover, &.MuiSelected': {
            backgroundColor: darken(colors.primary.darker, 0.1),
            border: '2px solid ' + darken(colors.primary.darker, 0.4)
          },
          '&:active': {
            backgroundColor: darken(colors.primary.darker, 0.25),
            border: '2px solid ' + darken(colors.primary.darker, 0.6)
          }
        },
        textPrimary: {
          backgroundColor: '#F5F5F5',
          color: colors.secondary.main,
          border: 'none',
          borderRadius: '12px',

          '&:hover, &.MuiSelected': {
            backgroundColor: colors.secondary.lightest
          },
          '&:active': {
            backgroundColor: colors.secondary.lighter
          }
        },
        sizeSmall: {
          padding: '3px 12px'
        },
        sizeMedium: {
          padding: '12px 16px'
        },
        sizeLarge: {
          padding: '12px 48px'
        }
      }
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: 0
        }
      }
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          width: '32px',
          height: '32px'
        }
      }
    },
    MuiTabPanel: {
      styleOverrides: {
        root: {
          padding: '0'
        }
      }
    },
    MuiList: {
      styleOverrides: {
        root: {
          backgroundColor: '#F9F9F9',
          padding: 1,
          margin: 0
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: colors.primary.lighter
          },
          '&:focus': {
            backgroundColor: colors.primary.lighter
          },
        }
      }
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
          body2: 'div'
        }
      },
      styleOverrides: {
        gutterBottom: {
          marginBottom: 4
        },
        paragraph: {
          fontSize: 17,
          lineHeight: 1.7
        }
      }
    }
  },
  typography: {
    fontFamily:
      '"Poppins", "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"',
    h1: {
      fontWeight: 700,
      fontSize: 32
    },
    h2: {
      fontWeight: 700,
      fontSize: 26
    },
    h3: {
      fontWeight: 500,
      fontSize: 22
    },
    h4: {
      fontWeight: 500,
      fontSize: 18
    },
    h5: {
      fontWeight: 500,
      fontSize: 15
    },
    body1: {
      fontSize: 14
    },
    button: {
      fontWeight: 600
    },
    caption: {
      fontSize: 18,
      textTransform: 'uppercase'
    },
    subtitle1: {
      fontSize: 12,
      fontWeight: 400
    },
    body2: {
      fontSize: 14,
      fontWeight: 400,
      color: colors.secondary.light
    }
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
    'none'
  ]
});
