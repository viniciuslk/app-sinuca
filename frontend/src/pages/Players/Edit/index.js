import React, { useMemo, useCallback } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

import * as yup from 'yup'

import { axiosInstance } from 'configs/Axios'

import { SvcFormProvider } from 'components/form/Form'

import { SvcPagePlayersEditContent } from './PlayersEditContent'

const SvcPagePlayersEdit = () => {
  const params = useParams()

  const fetchPlayer = useCallback(async () => {
    const response = await axiosInstance.get(
      `/players/${params.id}?include=team`
    )

    return response.data
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { data } = useQuery('player', fetchPlayer)

  const validationSchema = useMemo(
    () =>
      yup.object().shape({
        name: yup.string().required('Preencha o nome.')
      }),
    []
  )

  return (
    <SvcFormProvider defaultValues={data} validationSchema={validationSchema}>
      <SvcPagePlayersEditContent />
    </SvcFormProvider>
  )
}

export default SvcPagePlayersEdit
