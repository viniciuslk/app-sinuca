import React, { useCallback, memo } from 'react'
import { useQuery } from 'react-query'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableContainer from '@material-ui/core/TableContainer'

import { axiosInstance } from 'configs/Axios'

import { SvcNoRegisters } from 'components/atoms/NoRegisters'
import { useCrudOnCreate } from 'components/organisms/Crud'

import { SvcPagePlayersListHeader } from './PlayersListHeader'
import { SvcPagePlayersListRow } from './PlayersListRow'

const SvcPagePlayersList = memo(() => {
  const onCreate = useCrudOnCreate()

  const fetchPlayers = useCallback(async () => {
    const response = await axiosInstance.get('/players?include=team')

    return response.data
  }, [])

  const { data } = useQuery('players', fetchPlayers)

  return (
    <>
      {data.length > 0 && (
        <TableContainer>
          <Table>
            <SvcPagePlayersListHeader />
            <TableBody>
              <SvcPagePlayersListRow players={data} />
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {data.length === 0 && <SvcNoRegisters onCreate={onCreate} />}
    </>
  )
})

SvcPagePlayersList.displayName = 'SvcPagePlayersList'

export default SvcPagePlayersList
