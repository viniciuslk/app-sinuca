import React, { memo, useCallback } from 'react'
import { useQuery } from 'react-query'
import { useParams, useHistory } from 'react-router-dom'

import { useDisclosure } from 'hooks'

import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import EmojiEventsIcon from '@material-ui/icons/EmojiEvents'

import { axiosInstance } from 'configs/Axios'

import { SvcBox } from 'components/atoms/Box'
import { SvcFlex } from 'components/atoms/Flex'

import { SvcPageChampionshipsDetailsActions } from './ChampionshipsDetailsActions'
import { SvcChampionshipsDetailsMatchDrawer } from './ChampionshipsDetailsMatchDrawer'
import { SvcPageChampionshipsDetailsTableList } from './Table'

const SvcPageChampionshipsDetails = memo(() => {
  const params = useParams()
  const history = useHistory()

  const { onOpen, ...matchDrawerProps } = useDisclosure()

  const fetchChampionshipsTables = useCallback(async () => {
    const response = await axiosInstance.get(
      `/championships/${params.id}/tables`
    )

    return response.data
  }, [])

  const { data } = useQuery('championships-tables', fetchChampionshipsTables)

  const fetchChampionships = useCallback(async () => {
    const response = await axiosInstance.get(
      `/championships/${params.id}?include=teams`
    )

    return response.data
  }, [])

  const { data: championship } = useQuery('championship', fetchChampionships)

  return (
    <>
      <Paper>
        <SvcBox p={8} m={8}>
          <Typography color="primary" variant="h6">
            {championship.name}
          </Typography>

          <SvcBox mb={5}>
            <Typography variant="subtitle1">
              {championship.description}
            </Typography>
          </SvcBox>

          <Typography variant="body2">{championship.rules}</Typography>
        </SvcBox>
      </Paper>
      {!championship.teams.length ? (
        <SvcFlex
          alignItems="center"
          justifyContent="center"
          p={8}
          width="100%"
          flexDirection="column"
        >
          <Typography variant="h6" color="textPrimary">
            Este campeonato não possui times.
          </Typography>
          <SvcBox mt={5}>
            <Button
              size="large"
              color="primary"
              variant="contained"
              onClick={() => history.push('/times')}
            >
              Relacionar times
            </Button>
          </SvcBox>
        </SvcFlex>
      ) : (
        <>
          <SvcPageChampionshipsDetailsActions
            openMatchDrawer={onOpen}
            hasWinner={!!data.winner}
          />
          {data.winner ? (
            <SvcFlex
              alignItems="center"
              justifyContent="center"
              p={8}
              width="100%"
              flexDirection="column"
            >
              <EmojiEventsIcon
                size="large"
                color="primary"
                style={{ fontSize: 64 }}
              />
              <Typography color="primary" variant="h6">
                Esse campeonato já tem um vencedor!
              </Typography>
              <Typography variant="h6">Parabéns: {data.winner.name}</Typography>
            </SvcFlex>
          ) : (
            <SvcPageChampionshipsDetailsTableList items={data.table} />
          )}
        </>
      )}

      <SvcChampionshipsDetailsMatchDrawer {...matchDrawerProps} />
    </>
  )
})

SvcPageChampionshipsDetails.displayName = 'SvcPageChampionshipsDetails'

SvcPageChampionshipsDetails.propTypes = {}

export default SvcPageChampionshipsDetails
