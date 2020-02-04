import React from 'react'

import PropTypes from 'prop-types'

import { Typography } from '@material-ui/core'

import { SvcFlex } from 'components/atoms/Flex'

export const SvcError = ({ error }) => {
  return (
    <SvcFlex width="100%" my={10} justifyContent="center">
      <SvcFlex
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <Typography variant="h6">Ooops!</Typography>
        <Typography variant="subtitle1">
          Infelizmente, ocorreu um erro na requisição :(
        </Typography>

        <Typography variant="overline" color="textSecondary">
          Erro: {error && error.message}
        </Typography>
      </SvcFlex>
    </SvcFlex>
  )
}

SvcError.displayName = 'SvcError'

SvcError.propTypes = {
  error: PropTypes.any
}
