import React from 'react'
import { ReactQueryConfigProvider } from 'react-query'
import { HashRouter } from 'react-router-dom'

import { SnackbarProvider } from 'notistack'
import PropTypes from 'prop-types'

import { SvcThemeProvider } from './ThemeProvider'

const reactQueryConfig = {
  retry: 3,
  retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
  staleTime: 0, // 30 * 1000: 30 seg
  cacheTime: 0, // 5 * 60 * 1000, // 5 min
  refetchAllOnWindowFocus: false,
  refetchInterval: false,
  suspense: true
}

export const SvcProviders = ({ children }) => (
  <ReactQueryConfigProvider config={reactQueryConfig}>
    <SvcThemeProvider>
      <SnackbarProvider maxSnack={3}>
        <HashRouter>{children}</HashRouter>
      </SnackbarProvider>
    </SvcThemeProvider>
  </ReactQueryConfigProvider>
)

SvcProviders.propTypes = {
  children: PropTypes.node
}
