import React, { memo } from 'react'

import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import { SvcBox } from 'components/atoms/Box'
import { SvcFlex } from 'components/atoms/Flex'

export const SvcNoRegisters = memo(({ onCreate }) => {
  return (
    <SvcFlex
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      p={8}
      height={200}
      width="100%"
    >
      <SvcBox mb={5}>
        <Typography variant="h5">Não há registros cadastrados :(</Typography>
      </SvcBox>
      <Button variant="outlined" color="primary" onClick={onCreate}>
        Adicione um ítem agora mesmo!
      </Button>
    </SvcFlex>
  )
})

SvcNoRegisters.displayName = 'SvcNoRegisters'

SvcNoRegisters.propTypes = {
  onCreate: PropTypes.func
}
