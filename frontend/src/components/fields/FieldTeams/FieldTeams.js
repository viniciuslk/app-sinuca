import React, { useCallback } from 'react'
import { useQuery } from 'react-query'
import { useHistory } from 'react-router-dom'

import PropTypes from 'prop-types'

import { Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button'

import AddOutlinedIcon from '@material-ui/icons/AddOutlined'

import { axiosInstance } from 'configs/Axios'

import { SvcBox } from 'components/atoms/Box'
import { useSvcFormContext } from 'components/form/Form'
import {
  SvcSelectField,
  SvcSelectFieldOption
} from 'components/form/SelectField'

export const SvcFieldTeams = ({ hideItem, withReset, name, ...props }) => {
  const { setValue, getValues } = useSvcFormContext()

  const history = useHistory()
  const fetchTeams = useCallback(async () => {
    const response = await axiosInstance.get('/teams')

    return response.data
  }, [])

  const { data } = useQuery('teams', fetchTeams)

  return data && data.length ? (
    <SvcSelectField name={name} {...props}>
      {data.map(team => {
        return (
          team.id !== hideItem.id && (
            <SvcSelectFieldOption key={team.id} value={team.id}>
              {team.name}
            </SvcSelectFieldOption>
          )
        )
      })}
      {withReset && getValues()[name] && (
        <SvcSelectFieldOption onClick={() => setValue(name, null)}>
          <Typography color="error">Limpar campo</Typography>
        </SvcSelectFieldOption>
      )}
    </SvcSelectField>
  ) : (
    <SvcBox my={5}>
      <Button
        size="large"
        fullWidth
        startIcon={<AddOutlinedIcon />}
        variant="outlined"
        onClick={() => history.push('/times')}
      >
        Adicionar Time
      </Button>
    </SvcBox>
  )
}

SvcFieldTeams.defaultProps = {
  withReset: false,
  hideItem: {}
}

SvcFieldTeams.propTypes = {
  hideItem: PropTypes.object,
  withReset: PropTypes.bool,
  name: PropTypes.string
}
