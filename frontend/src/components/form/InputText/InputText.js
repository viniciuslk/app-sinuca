import React from 'react'

import PropTypes from 'prop-types'

import { useSvcFormContext } from '../Form'
import { SvcTextField } from '../TextField'

export const SvcInputText = ({ error, errorMessage, name, ...props }) => {
  const { register } = useSvcFormContext()

  return (
    <SvcTextField
      name={name}
      helperText={errorMessage}
      error={error}
      inputRef={register}
      {...props}
    />
  )
}

SvcInputText.propTypes = {
  errorMessage: PropTypes.object,
  name: PropTypes.string,
  error: PropTypes.bool
}
