import React, { useCallback } from 'react'
import { useMutation } from 'react-query'

import { useSnackbar } from 'notistack'

import { axiosInstance } from 'configs/Axios'

import { SvcBox } from 'components/atoms/Box'
import { SvcButton } from 'components/atoms/Button'
import { SvcFlex } from 'components/atoms/Flex'
import SvcForm, { useSvcFormContext } from 'components/form/Form/Form'
import { SvcInputText } from 'components/form/InputText/InputText'
import { SvcNumberField } from 'components/form/NumberField'
import { SvcTextAreaField } from 'components/form/TextAreaField/TextAreaField'
import { SvcFormHeader } from 'components/molecules/FormHeader'
import { useCrudOnClose } from 'components/organisms/Crud/CrudProvider'

export const SvcPageChampionshipsCreateContent = () => {
  const onClose = useCrudOnClose()
  const { errors } = useSvcFormContext()
  const { enqueueSnackbar } = useSnackbar()

  const createChampionship = useCallback(async data => {
    try {
      await axiosInstance.post('/championships', data)

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

  const [createChampionshipMutation, { isLoading }] = useMutation(
    createChampionship,
    {
      refetchQueries: ['championships']
    }
  )

  const onSubmit = (data, event) => {
    event.preventDefault()
    createChampionshipMutation(data)
  }

  return (
    <>
      <SvcFormHeader onClose={onClose} entityName="novo campeonato" />
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

          <SvcTextAreaField
            label="Descrição"
            name="description"
            required
            fullWidth
            error={!!errors.description}
            errorMessage={errors.description}
          />

          <SvcTextAreaField
            label="Regras"
            name="rules"
            required
            fullWidth
            error={!!errors.description}
            errorMessage={errors.description}
          />

          <SvcNumberField
            label="Pontos para vencer"
            name="pointsToWin"
            required
            fullWidth
            error={!!errors.pointsToWin}
            errorMessage={errors.pointsToWin}
          />

          <SvcNumberField
            label="Máximo de equipes"
            name="maxTeams"
            required
            fullWidth
            error={!!errors.maxTeams}
            errorMessage={errors.maxTeams}
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
      </SvcBox>
    </>
  )
}
