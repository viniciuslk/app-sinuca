import React from 'react'

import PropTypes from 'prop-types'

import { useSvcFormContext } from '../Form'
import { SvcTextField } from '../TextField'

export const SvcNumberField = ({ error, errorMessage, ...props }) => {
  const { register } = useSvcFormContext()

  return (
    <SvcTextField
      type="number"
      helperText={errorMessage}
      error={error}
      inputRef={register}
      {...props}
    />
  )
}

SvcNumberField.propTypes = {
  errorMessage: PropTypes.object,
  error: PropTypes.bool
}
