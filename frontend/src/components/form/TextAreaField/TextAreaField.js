import React from 'react'

import PropTypes from 'prop-types'

import { useSvcFormContext } from 'components/form/Form'
import { SvcTextField } from 'components/form/TextField'

export const SvcTextAreaField = ({ errorMessage, error, ...props }) => {
  const { register } = useSvcFormContext()

  return (
    <SvcTextField
      multiline
      helperText={errorMessage}
      error={error}
      inputRef={register}
      {...props}
    />
  )
}

SvcTextAreaField.propTypes = {
  errorMessage: PropTypes.object,
  error: PropTypes.bool
}
