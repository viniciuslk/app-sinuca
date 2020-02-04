import React, { memo } from 'react'

import PropTypes from 'prop-types'

import { TableRow, TableCell, Typography } from '@material-ui/core'

export const SvcPageChampionshipsDetailsTableListRow = memo(({ items }) => {
  return (
    <>
      {items &&
        items.map(item => (
          <TableRow key={item.id} hover>
            <TableCell component="th" scope="row">
              <Typography variant="subtitle2">{item.name}</Typography>
            </TableCell>
            <TableCell component="th" align="right" scope="row">
              {item.matches}
            </TableCell>
            <TableCell component="th" align="right" scope="row">
              {item.victories}
            </TableCell>
            <TableCell component="th" align="right" scope="row">
              <Typography variant="subtitle2">{item.points}</Typography>
            </TableCell>
          </TableRow>
        ))}
    </>
  )
})

SvcPageChampionshipsDetailsTableListRow.displayName =
  'SvcPageChampionshipsDetailsTableListRow'

SvcPageChampionshipsDetailsTableListRow.propTypes = {
  items: PropTypes.array
}
