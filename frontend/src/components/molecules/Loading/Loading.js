import React, { useMemo } from 'react'

import PropTypes from 'prop-types'

import CircularProgress from '@material-ui/core/CircularProgress'

import { SvcFlex } from 'components/atoms/Flex'

export const SvcLoading = ({ CircularProgressProps, ContainerProps }) => {
  const defaultCircularProps = useMemo(
    () => ({
      size: 50,
      thickness: 5,
      ...CircularProgressProps
    }),
    [CircularProgressProps]
  )

  const defaultContainerProps = useMemo(
    () => ({
      alignItems: 'center',
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      padding: 12,
      ...ContainerProps
    }),
    [ContainerProps]
  )

  return (
    <SvcFlex {...defaultContainerProps}>
      <CircularProgress {...defaultCircularProps} />
    </SvcFlex>
  )
}

SvcLoading.propTypes = {
  CircularProgressProps: PropTypes.object,
  ContainerProps: PropTypes.object
}
