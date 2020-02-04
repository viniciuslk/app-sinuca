import { createMuiTheme } from '@material-ui/core/styles'

const typography = {
  useNextVariants: true,
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontSize: 14,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500
}

const palette = {
  common: {
    black: 'rgba(73, 73, 73, 1)',
    white: '#fff'
  },
  background: {
    paper: '#fff',
    default: '#f6f6f6'
  },
  primary: {
    light: '#1DE2E2',
    main: '#17B5B5',
    dark: '#0F7171',
    contrastText: '#fff'
  },
  secondary: {
    veryLight: 'rgba(245, 245, 245, 1)',
    middleVeryLight: 'rgba(224, 224, 224, 1)',
    middleLight: 'rgba(189, 189, 189, 1)',
    light: 'rgba(164, 164, 164, 1)',
    main: 'rgba(117, 117, 117, 1)',
    dark: 'rgba(73, 73, 73, 1)',
    contrastText: 'rgba(255, 255, 255, 1)'
  },
  info: {
    light: 'rgba(225, 245, 254, 1)',
    main: 'rgba(3, 169, 244, 1)',
    dark: 'rgba(73, 73, 73, 1)',
    contrastText: 'rgba(255, 255, 255, 1)'
  },
  success: {
    light: 'rgba(233, 245, 233, 1)',
    main: 'rgba(102, 187, 106, 1)',
    dark: 'rgba(102, 187, 106, 1)',
    contrastText: 'rgba(255, 255, 255, 1)'
  },
  purple: {
    light: 'rgba(225, 245, 254, 1)',
    main: 'rgba(149, 117, 205, 1)',
    dark: 'rgba(73, 73, 73, 1)',
    contrastText: 'rgba(255, 255, 255, 1)'
  },
  error: {
    light: 'rgba(245, 233, 233, 1)',
    main: '#f44336',
    dark: '#d32f2f',
    contrastText: '#fff'
  },
  warning: {
    light: '#FFECB3',
    main: '#FFC107',
    dark: '#FFC107',
    contrastText: 'rgba(255, 255, 255, 1)'
  },
  text: {
    main: 'rgba(73, 73, 73, 1)',
    primary: 'rgba(73, 73, 73, 1)',
    secondary: 'rgba(117, 117, 117, .5)',
    disabled: 'rgba(158, 158, 158, 1)',
    hint: 'rgba(0, 0, 0, 0.38)'
  },
  grey: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    A100: '#d5d5d5',
    A200: '#aaaaaa',
    A400: '#303030',
    A700: '#616161'
  }
}

const overrides = {
  spacing: 4,
  overrides: {
    MuiDrawer: {
      paper: {
        width: 400,
        maxWidth: '100%',
        padding: '24px'
      }
    }
  }
}

export const svcTheme = createMuiTheme({
  palette,
  typography,
  ...overrides
})
