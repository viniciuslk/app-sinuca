import React, { useContext } from 'react'

import PropTypes from 'prop-types'
import { ThemeContext } from 'styled-components'

import { ThemeProvider } from '@material-ui/styles'

import { svcTheme } from '../styles'

export const useThemeContext = () => useContext(ThemeContext)

export const SvcThemeProvider = ({ children }) => {
  return <ThemeProvider theme={svcTheme}>{children}</ThemeProvider>
}

SvcThemeProvider.propTypes = {
  children: PropTypes.node
}
