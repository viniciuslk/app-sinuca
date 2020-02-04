import React, { useMemo, useCallback } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

import * as yup from 'yup'

import { axiosInstance } from 'configs/Axios'

import { SvcFormProvider } from 'components/form/Form'

import { SvcPageChampionshipsEditContent } from './ChampionshipsEditContent'

const SvcPageChampionshipsEdit = () => {
  const params = useParams()

  const fetchChampionship = useCallback(async () => {
    const response = await axiosInstance.get(`/championships/${params.id}?`)

    return response.data
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { data } = useQuery('championship', fetchChampionship)

  const validationSchema = useMemo(
    () =>
      yup.object().shape({
        name: yup.string().required('Preencha o nome.'),
        description: yup.string().required('Preencha a descrição.'),
        pointsToWin: yup
          .number()
          .required('Preencha o número de pontos para a vitória.'),
        maxTeams: yup.number().required('Preencha o número de equipes.')
      }),
    []
  )

  return (
    <SvcFormProvider defaultValues={data} validationSchema={validationSchema}>
      <SvcPageChampionshipsEditContent />
    </SvcFormProvider>
  )
}

export default SvcPageChampionshipsEdit
