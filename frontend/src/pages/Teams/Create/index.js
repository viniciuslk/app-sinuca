import React, { useMemo } from 'react'

import * as yup from 'yup'

import { SvcFormProvider } from '../../../components/form/Form'

import { SvcPageTeamsCreateContent } from './TeamsCreateContent'

const SvcPageTeamsCreate = () => {
  const validationSchema = useMemo(
    () =>
      yup.object().shape({
        name: yup.string().required('Preencha o nome.')
      }),
    []
  )

  return (
    <SvcFormProvider validationSchema={validationSchema}>
      <SvcPageTeamsCreateContent />
    </SvcFormProvider>
  )
}

export default SvcPageTeamsCreate
