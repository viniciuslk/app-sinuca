import React from 'react'

import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'

export const SvcButton = ({ isLoading, ...props }) => (
  <Button
    disabled={isLoading}
    startIcon={isLoading && <CircularProgress size={20} thickness={5} />}
    {...props}
  />
)

SvcButton.propTypes = {
  isLoading: PropTypes.bool
}
