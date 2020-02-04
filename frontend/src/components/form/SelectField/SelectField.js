import React, { useEffect } from 'react'

import PropTypes from 'prop-types'

import { useSvcFormContext } from '../Form'
import { SvcTextField } from '../TextField'

export const SvcSelectField = ({ name, children, ...props }) => {
  const { register, setValue, watch } = useSvcFormContext()

  const value = watch(name) || null
  useEffect(() => {
    register({ name })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [register])

  return (
    <SvcTextField
      select
      name={name}
      value={value || ''}
      onChange={e => setValue(name, e.target.value)}
      {...props}
    >
      {children}
    </SvcTextField>
  )
}

SvcSelectField.propTypes = {
  items: PropTypes.array,
  children: PropTypes.any,
  name: PropTypes.string
}
