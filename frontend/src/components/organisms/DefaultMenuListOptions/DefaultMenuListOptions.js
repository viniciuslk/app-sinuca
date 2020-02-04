import React, { memo, useState, useCallback } from 'react'

import PropTypes from 'prop-types'

import { Typography } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import PriorityHighOutlinedIcon from '@material-ui/icons/PriorityHighOutlined'

const Component = ({
  onEdit: onEditProps,
  onDelete: onDeleteProps,
  item,
  children
}) => {
  const [anchorEl, setAnchorEl] = useState(null)
  const [isDeleteConfirm, setIsDeleteConfirm] = useState(false)

  const onClose = useCallback(event => {
    event.stopPropagation()
    event.preventDefault()
    setIsDeleteConfirm(false)
    setAnchorEl(null)
  }, [])

  const onClick = useCallback(event => {
    event.preventDefault()
    event.stopPropagation()
    setAnchorEl(event.currentTarget)
  }, [])

  const onEdit = useCallback(
    event => {
      onEditProps(item)
      onClose(event)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [item]
  )

  const onDelete = useCallback(
    event => {
      onDeleteProps(item)
      onClose(event)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [item]
  )

  const selectActionOnDelete = event => {
    event.preventDefault()
    event.stopPropagation()

    if (!isDeleteConfirm) {
      setIsDeleteConfirm(true)
    } else {
      onDelete(event)
    }
  }

  return (
    <>
      <IconButton aria-haspopup="true" onClick={onClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={onClose}
        elevation={2}
      >
        <MenuItem onClick={onEdit}>
          <ListItemIcon>
            <EditIcon />
          </ListItemIcon>
          <ListItemText primary="Editar" />
        </MenuItem>
        <MenuItem onClick={selectActionOnDelete}>
          <ListItemIcon>
            {isDeleteConfirm ? (
              <PriorityHighOutlinedIcon color="error" />
            ) : (
              <DeleteIcon />
            )}
          </ListItemIcon>
          <ListItemText
            primary={
              isDeleteConfirm ? (
                <Typography color="error">Confirmar</Typography>
              ) : (
                'Excluir'
              )
            }
          />
        </MenuItem>
        {children}
      </Menu>
    </>
  )
}

Component.displayName = 'SvcDefaultMenuListOptions'

Component.propTypes = {
  onEdit: PropTypes.func,
  onDelete: PropTypes.func,
  item: PropTypes.object,
  children: PropTypes.any
}

export const SvcDefaultMenuListOptions = memo(Component)
