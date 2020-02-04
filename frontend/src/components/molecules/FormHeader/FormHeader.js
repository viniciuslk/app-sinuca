import React, { memo, useCallback } from 'react'

import PropTypes from 'prop-types'

import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'

import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined'
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined'
import EditIcon from '@material-ui/icons/Edit'

import { SvcBox } from 'components/atoms/Box'
import { SvcFlex } from 'components/atoms/Flex'

export const SvcFormHeader = memo(({ onClose, action, entityName }) => {
  const Icon = useCallback(
    () =>
      action === 'create' ? (
        <AddBoxOutlinedIcon fontSize="large" />
      ) : (
        <EditIcon fontSize="large" />
      ),
    [action]
  )

  const Text = useCallback(
    () => `${action === 'create' ? 'Criar' : 'Editar'} ${entityName}`,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [action]
  )

  return (
    <SvcFlex alignItems="center" justifyContent="space-between" pb={5}>
      <SvcFlex mr={3} alignItems="center">
        <Icon />
        <SvcBox ml={3}>
          <Typography variant="h6">
            <Text />
          </Typography>
        </SvcBox>
      </SvcFlex>
      {onClose && (
        <IconButton onClick={onClose}>
          <CloseOutlinedIcon />
        </IconButton>
      )}
    </SvcFlex>
  )
})

SvcFormHeader.displayName = 'SvcFormHeader'

SvcFormHeader.defaultProps = {
  action: 'create',
  entityName: 'registro'
}

SvcFormHeader.propTypes = {
  action: PropTypes.oneOf(['edit', 'create']),
  entityName: PropTypes.string,
  onClose: PropTypes.func
}
