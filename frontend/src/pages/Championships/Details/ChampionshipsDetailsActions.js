import React, { memo } from 'react'

import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import { SvcFlex } from 'components/atoms/Flex'

export const SvcPageChampionshipsDetailsActions = memo(
  ({ openMatchDrawer, hasWinner }) => {
    return (
      <SvcFlex justifyContent="space-between" alignItems="center" mb={4}>
        <Typography variant="h6" color="textPrimary">
          Classificação
        </Typography>
        <Button
          disabled={hasWinner}
          size="large"
          color="secondary"
          variant="contained"
          onClick={openMatchDrawer}
        >
          Nova partida
        </Button>
      </SvcFlex>
    )
  }
)

SvcPageChampionshipsDetailsActions.displayName =
  'SvcPageChampionshipsDetailsActions'

SvcPageChampionshipsDetailsActions.propTypes = {
  openMatchDrawer: PropTypes.func,
  hasWinner: PropTypes.bool
}
