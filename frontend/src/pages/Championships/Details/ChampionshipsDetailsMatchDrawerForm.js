import React, { memo, useCallback } from 'react'
import { useMutation } from 'react-query'
import { useParams } from 'react-router-dom'

import { useSnackbar } from 'notistack'
import PropTypes from 'prop-types'

import { axiosInstance } from 'configs/Axios'

import { SvcBox } from 'components/atoms/Box'
import { SvcButton } from 'components/atoms/Button'
import { SvcFlex } from 'components/atoms/Flex'
import { SvcFieldTeams } from 'components/fields/FieldTeams'
import { useSvcFormContext } from 'components/form/Form'
import SvcForm from 'components/form/Form/Form'

export const SvcChampionshipsDetailsMatchDrawerForm = memo(({ onClose }) => {
  const { errors, watch } = useSvcFormContext()
  const params = useParams()

  const { enqueueSnackbar } = useSnackbar()

  const createChampionshipMatch = useCallback(async data => {
    try {
      await axiosInstance.post('/matches', {
        championship: { id: params.id },
        ...data
      })

      onClose()

      enqueueSnackbar('Sucesso ao cadastrar novo campeonato!', {
        variant: 'success'
      })
    } catch (e) {
      enqueueSnackbar('Ops... Ocorreu um erro!', {
        variant: 'error'
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [createChampionshipMatchMutation, { isLoading }] = useMutation(
    createChampionshipMatch,
    {
      refetchQueries: ['championships-tables']
    }
  )

  const onSubmit = useCallback((data, event) => {
    event.preventDefault()
    createChampionshipMatchMutation(data)
  }, [])

  const winner = watch('winner')
  const looser = watch('looser')

  return (
    <SvcForm onSubmit={onSubmit}>
      <SvcFieldTeams
        fullWidth
        withReset
        hideItem={looser}
        name="winner.id"
        label="Quem ganhou?"
        error={!!errors.winner}
        helperText={errors.winner}
        required
      />
      <SvcFieldTeams
        fullWidth
        withReset
        hideItem={winner}
        name="looser.id"
        label="Quem perdeu?"
        error={!!errors.looser}
        helperText={errors.looser}
        required
      />

      <SvcFlex mt={8} justifyContent="flex-end">
        <SvcBox mr={4}>
          <SvcButton size="large" variant="text">
            Cancelar
          </SvcButton>
        </SvcBox>
        <SvcButton
          isLoading={isLoading}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
        >
          Salvar
        </SvcButton>
      </SvcFlex>
    </SvcForm>
  )
})

SvcChampionshipsDetailsMatchDrawerForm.displayName =
  'SvcChampionshipsDetailsMatchDrawerForm'

SvcChampionshipsDetailsMatchDrawerForm.propTypes = {
  onClose: PropTypes.func
}
