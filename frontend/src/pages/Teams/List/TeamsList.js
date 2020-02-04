import React, { useCallback, memo } from 'react'
import { useQuery } from 'react-query'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableContainer from '@material-ui/core/TableContainer'

import { axiosInstance } from 'configs/Axios'

import { SvcNoRegisters } from 'components/atoms/NoRegisters'
import { useCrudOnCreate } from 'components/organisms/Crud'

import { SvcPageTeamsListHeader } from './TeamsListHeader'
import { SvcPageTeamsListRow } from './TeamsListRow'

const SvcPageTeamsList = memo(() => {
  const onCreate = useCrudOnCreate()

  const fetchTeams = useCallback(async () => {
    const response = await axiosInstance.get('/teams?include=championship')

    return response.data
  }, [])

  const { data } = useQuery('teams', fetchTeams)

  return (
    <>
      {data.length > 0 && (
        <TableContainer>
          <Table>
            <SvcPageTeamsListHeader />
            <TableBody>
              <SvcPageTeamsListRow teams={data} />
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {data.length === 0 && <SvcNoRegisters onCreate={onCreate} />}
    </>
  )
})

SvcPageTeamsList.displayName = 'SvcPageTeamsList'

export default SvcPageTeamsList
