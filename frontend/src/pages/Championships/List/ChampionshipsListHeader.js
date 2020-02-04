import React, { memo } from 'react'

import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

export const SvcPageChampionshipsListHeader = memo(() => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Nome</TableCell>
        <TableCell></TableCell>
      </TableRow>
    </TableHead>
  )
})

SvcPageChampionshipsListHeader.displayName = 'SvcPageChampionshipsListHeader'
