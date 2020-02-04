import React, { memo } from 'react'
import { useMutation } from 'react-query'
import { useHistory } from 'react-router-dom'

import { useSnackbar } from 'notistack'
import PropTypes from 'prop-types'

import {
  TableRow,
  TableCell,
  MenuItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'

import VisibilityIcon from '@material-ui/icons/Visibility'

import { axiosInstance } from 'configs/Axios'

import { useCrudOnEdit } from 'components/organisms/Crud'
import { SvcDefaultMenuListOptions } from 'components/organisms/DefaultMenuListOptions'

export const SvcPageChampionshipsListRow = memo(({ championships }) => {
  const { enqueueSnackbar } = useSnackbar()
  const history = useHistory()

  const onEdit = useCrudOnEdit()

  const deleteChampionship = async championship => {
    try {
      await axiosInstance.delete(`championships/${championship.id}`)
      enqueueSnackbar('Sucesso ao excluir campeonato!', {
        variant: 'success'
      })
    } catch (e) {
      enqueueSnackbar('Ops... Ocorreu um erro :(', {
        variant: 'error'
      })
    }
  }

  const [onDelete] = useMutation(deleteChampionship, {
    refetchQueries: ['championships']
  })

  return (
    <>
      {championships &&
        championships.map(championship => (
          <TableRow
            key={championship.id}
            hover
            onClick={() => onEdit(championship)}
          >
            <TableCell component="th" scope="row">
              {championship.name}
            </TableCell>
            <TableCell align="right">
              <SvcDefaultMenuListOptions
                item={championship}
                onDelete={onDelete}
                onEdit={onEdit}
              >
                <MenuItem
                  onClick={event => {
                    event.stopPropagation()
                    event.preventDefault()
                    history.push(`/campeonatos/${championship.id}/detalhes`)
                  }}
                >
                  <ListItemIcon>
                    <VisibilityIcon />
                  </ListItemIcon>
                  <ListItemText primary="Detalhes" />
                </MenuItem>
              </SvcDefaultMenuListOptions>
            </TableCell>
          </TableRow>
        ))}
    </>
  )
})

SvcPageChampionshipsListRow.displayName = 'SvcPageChampionshipsListRow'

SvcPageChampionshipsListRow.propTypes = {
  championships: PropTypes.array
}
