import React, { useCallback } from 'react'
import { useQuery } from 'react-query'
import { useHistory } from 'react-router-dom'

import Button from '@material-ui/core/Button'

import AddOutlinedIcon from '@material-ui/icons/AddOutlined'

import { axiosInstance } from 'configs/Axios'

import { SvcBox } from 'components/atoms/Box'
import {
  SvcSelectField,
  SvcSelectFieldOption
} from 'components/form/SelectField'

export const SvcFieldChampionships = props => {
  const history = useHistory()
  const fetchTeams = useCallback(async () => {
    const response = await axiosInstance.get('/championships')

    return response.data
  }, [])

  const { data } = useQuery('championships', fetchTeams)

  return data && data.length ? (
    <SvcSelectField {...props}>
      {data.map(championship => (
        <SvcSelectFieldOption key={championship.id} value={championship.id}>
          {championship.name}
        </SvcSelectFieldOption>
      ))}
    </SvcSelectField>
  ) : (
    <SvcBox my={5}>
      <Button
        size="large"
        fullWidth
        startIcon={<AddOutlinedIcon />}
        variant="outlined"
        onClick={() => history.push('/campeonatos')}
      >
        Adicionar Campeonato
      </Button>
    </SvcBox>
  )
}
