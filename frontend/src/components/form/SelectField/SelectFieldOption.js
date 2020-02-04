import React, { forwardRef } from 'react'

import MatMenuItem from '@material-ui/core/MenuItem'

export const SvcSelectFieldOption = forwardRef((props, ref) => {
  return <MatMenuItem ref={ref} {...props} />
})

SvcSelectFieldOption.displayName = 'SvcSelectFieldOption'
