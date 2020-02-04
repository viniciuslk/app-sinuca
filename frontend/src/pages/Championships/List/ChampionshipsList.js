import React, { useCallback, memo } from 'react'
import { useQuery } from 'react-query'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableContainer from '@material-ui/core/TableContainer'

import { axiosInstance } from 'configs/Axios'

import { SvcNoRegisters } from 'components/atoms/NoRegisters'
import { useCrudOnCreate } from 'components/organisms/Crud'

import { SvcPageChampionshipsListHeader } from './ChampionshipsListHeader'
import { SvcPageChampionshipsListRow } from './ChampionshipsListRow'

const SvcPageChampionshipsList = memo(() => {
  const onCreate = useCrudOnCreate()

  const fetchChampionships = useCallback(async () => {
    const response = await axiosInstance.get('/championships')

    return response.data
  }, [])

  const { data } = useQuery('championships', fetchChampionships)

  return (
    <>
      {data.length > 0 && (
        <TableContainer>
          <Table>
            <SvcPageChampionshipsListHeader />
            <TableBody>
              <SvcPageChampionshipsListRow championships={data} />
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {data.length === 0 && <SvcNoRegisters onCreate={onCreate} />}
    </>
  )
})

SvcPageChampionshipsList.displayName = 'SvcPageChampionshipsList'

export default SvcPageChampionshipsList
