import React, { memo } from 'react'
import { useMutation } from 'react-query'

import { useSnackbar } from 'notistack'
import PropTypes from 'prop-types'

import { TableRow, TableCell } from '@material-ui/core'

import { axiosInstance } from 'configs/Axios'

import { useCrudOnEdit } from 'components/organisms/Crud'
import { SvcDefaultMenuListOptions } from 'components/organisms/DefaultMenuListOptions'

export const SvcPageTeamsListRow = memo(({ teams }) => {
  const { enqueueSnackbar } = useSnackbar()

  const onEdit = useCrudOnEdit()

  const deleteTeam = async team => {
    try {
      await axiosInstance.delete(`teams/${team.id}`)
      enqueueSnackbar('Sucesso ao excluir time!', {
        variant: 'success'
      })
    } catch (e) {
      enqueueSnackbar('Ops... Ocorreu um erro :(', {
        variant: 'error'
      })
    }
  }

  const [onDelete] = useMutation(deleteTeam, {
    refetchQueries: ['teams']
  })

  return (
    <>
      {teams &&
        teams.map(team => (
          <TableRow key={team.id} hover onClick={() => onEdit(team)}>
            <TableCell component="th" scope="row">
              {team.name}
            </TableCell>
            <TableCell component="th" scope="row">
              {team.championship ? team.championship.name : '-'}
            </TableCell>
            <TableCell align="right">
              <SvcDefaultMenuListOptions
                item={team}
                onDelete={onDelete}
                onEdit={onEdit}
              />
            </TableCell>
          </TableRow>
        ))}
    </>
  )
})

SvcPageTeamsListRow.displayName = 'SvcPageTeamsListRow'

SvcPageTeamsListRow.propTypes = {
  teams: PropTypes.array
}
