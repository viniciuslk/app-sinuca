import React, { memo } from 'react'

import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

export const SvcPageChampionshipsDetailsTableListHeader = memo(() => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Nome</TableCell>
        <TableCell align="right">Partidas</TableCell>
        <TableCell align="right">Vitórias</TableCell>
        <TableCell align="right">Pontos</TableCell>
      </TableRow>
    </TableHead>
  )
})

SvcPageChampionshipsDetailsTableListHeader.displayName =
  'SvcPageChampionshipsListHeader'
