import React, { useCallback } from 'react'
import { useMutation } from 'react-query'

import { useSnackbar } from 'notistack'

import { axiosInstance } from 'configs/Axios'

import { SvcBox } from 'components/atoms/Box'
import { SvcButton } from 'components/atoms/Button'
import { SvcFlex } from 'components/atoms/Flex'
import { SvcFieldTeams } from 'components/fields/FieldTeams/FieldTeams'
import SvcForm, { useSvcFormContext } from 'components/form/Form/Form'
import { SvcInputText } from 'components/form/InputText/InputText'
import { SvcFormHeader } from 'components/molecules/FormHeader'
import { useCrudOnClose } from 'components/organisms/Crud/CrudProvider'

export const SvcPagePlayersCreateContent = () => {
  const onClose = useCrudOnClose()
  const { errors } = useSvcFormContext()
  const { enqueueSnackbar } = useSnackbar()

  const createPlayer = useCallback(async data => {
    try {
      await axiosInstance.post('/players', data)

      onClose()

      enqueueSnackbar('Sucesso ao cadastrar novo jogador!', {
        variant: 'success'
      })
    } catch (e) {
      enqueueSnackbar('Ops... Ocorreu um erro!', {
        variant: 'error'
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [createPlayerMutation, { isLoading }] = useMutation(createPlayer, {
    refetchQueries: ['players']
  })

  const onSubmit = (data, event) => {
    event.preventDefault()
    createPlayerMutation(data)
  }

  return (
    <>
      <SvcFormHeader onClose={onClose} entityName="novo jogador" />
      <SvcBox py={5}>
        <SvcForm onSubmit={onSubmit}>
          <SvcInputText
            label="Nome"
            name="name"
            required
            fullWidth
            error={!!errors.name}
            errorMessage={errors.name}
          />

          <SvcFieldTeams label="Time" fullWidth name="team.id" />

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
      </SvcBox>
    </>
  )
}
