import React, { memo } from 'react'

import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

export const SvcPageTeamsListHeader = memo(() => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Nome</TableCell>
        <TableCell>Campeonato</TableCell>
        <TableCell></TableCell>
      </TableRow>
    </TableHead>
  )
})

SvcPageTeamsListHeader.displayName = 'SvcPageTeamsListHeader'
