import React, { useMemo, useCallback } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

import * as yup from 'yup'

import { axiosInstance } from 'configs/Axios'

import { SvcFormProvider } from 'components/form/Form'

import { SvcPageTeamsEditContent } from './TeamsEditContent'

const SvcPageTeamsEdit = () => {
  const params = useParams()

  const fetchTeam = useCallback(async () => {
    const response = await axiosInstance.get(
      `/teams/${params.id}?include=championship`
    )

    return response.data
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { data } = useQuery('team', fetchTeam)

  const validationSchema = useMemo(
    () =>
      yup.object().shape({
        name: yup.string().required('Preencha o nome.')
      }),
    []
  )

  return (
    <SvcFormProvider defaultValues={data} validationSchema={validationSchema}>
      <SvcPageTeamsEditContent />
    </SvcFormProvider>
  )
}

export default SvcPageTeamsEdit
