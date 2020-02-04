import React, { memo } from 'react'
import { useMutation } from 'react-query'

import { useSnackbar } from 'notistack'
import PropTypes from 'prop-types'

import { TableRow, TableCell } from '@material-ui/core'

import { axiosInstance } from 'configs/Axios'

import { useCrudOnEdit } from 'components/organisms/Crud'
import { SvcDefaultMenuListOptions } from 'components/organisms/DefaultMenuListOptions'

export const SvcPagePlayersListRow = memo(({ players }) => {
  const { enqueueSnackbar } = useSnackbar()

  const onEdit = useCrudOnEdit()

  const deletePlayer = async player => {
    try {
      await axiosInstance.delete(`players/${player.id}`)
      enqueueSnackbar('Sucesso ao excluir jogador!', {
        variant: 'success'
      })
    } catch (e) {
      enqueueSnackbar('Ops... Ocorreu um erro :(', {
        variant: 'error'
      })
    }
  }

  const [onDelete] = useMutation(deletePlayer, {
    refetchQueries: ['players']
  })

  return (
    <>
      {players &&
        players.map(player => (
          <TableRow key={player.id} hover onClick={() => onEdit(player)}>
            <TableCell component="th" scope="row">
              {player.name}
            </TableCell>
            <TableCell component="th" scope="row">
              {player.team ? player.team.name : '-'}
            </TableCell>
            <TableCell align="right">
              <SvcDefaultMenuListOptions
                item={player}
                onDelete={onDelete}
                onEdit={onEdit}
              />
            </TableCell>
          </TableRow>
        ))}
    </>
  )
})

SvcPagePlayersListRow.displayName = 'SvcPagePlayersListRow'

SvcPagePlayersListRow.propTypes = {
  players: PropTypes.array
}
