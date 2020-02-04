import React, { useCallback } from 'react'
import { useMutation } from 'react-query'
import { useParams } from 'react-router-dom'

import { useSnackbar } from 'notistack'

import { axiosInstance } from 'configs/Axios'

import { SvcBox } from 'components/atoms/Box'
import { SvcButton } from 'components/atoms/Button'
import { SvcFlex } from 'components/atoms/Flex'
import { SvcFieldChampionships } from 'components/fields/FieldChampionships/FieldChampionships'
import SvcForm, { useSvcFormContext } from 'components/form/Form/Form'
import { SvcInputText } from 'components/form/InputText/InputText'
import { SvcFormHeader } from 'components/molecules/FormHeader'
import { useCrudOnClose } from 'components/organisms/Crud/CrudProvider'

export const SvcPageTeamsEditContent = () => {
  const params = useParams()

  const onClose = useCrudOnClose()
  const { errors } = useSvcFormContext()
  const { enqueueSnackbar } = useSnackbar()

  const updateTeam = useCallback(async data => {
    try {
      await axiosInstance.put('/teams', {
        ...data,
        id: params.id
      })

      onClose()

      enqueueSnackbar('Sucesso ao cadastrar novo time!', {
        variant: 'success'
      })
    } catch (error) {
      enqueueSnackbar('Ops... Ocorreu um erro :(', {
        variant: 'error'
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [mutate, { isLoading }] = useMutation(updateTeam, {
    refetchQueries: ['teams']
  })

  const onSubmit = (data, event) => {
    event.preventDefault()
    mutate(data)
  }

  return (
    <>
      <SvcFormHeader onClose={onClose} entityName="time" action="edit" />
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

          <SvcFieldChampionships
            label="Campeonatos"
            fullWidth
            name="championship.id"
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
