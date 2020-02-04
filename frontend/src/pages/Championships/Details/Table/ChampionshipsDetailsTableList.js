import React, { memo } from 'react'

import PropTypes from 'prop-types'

import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableContainer from '@material-ui/core/TableContainer'

import { SvcPageChampionshipsDetailsTableListHeader } from './ChampionshipsDetailsTableListHeader'
import { SvcPageChampionshipsDetailsTableListRow } from './ChampionshipsDetailsTableListRow'

export const SvcPageChampionshipsDetailsTableList = memo(({ items }) => {
  return (
    <Paper>
      <TableContainer>
        <Table>
          <SvcPageChampionshipsDetailsTableListHeader />
          <TableBody>
            <SvcPageChampionshipsDetailsTableListRow items={items} />
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
})

SvcPageChampionshipsDetailsTableList.displayName =
  'SvcPageChampionshipsDetailsTableList'

SvcPageChampionshipsDetailsTableList.propTypes = {
  items: PropTypes.array
}
