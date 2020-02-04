import React from 'react'

import PropTypes from 'prop-types'

import MatTextField from '@material-ui/core/TextField'

export const SvcTextField = ({ helperText, error, ...props }) => {
  return (
    <MatTextField
      error={error}
      helperText={error ? helperText.message : helperText}
      variant="outlined"
      margin="normal"
      {...props}
    />
  )
}

SvcTextField.propTypes = {
  helperText: PropTypes.object,
  error: PropTypes.bool
}
