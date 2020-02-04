import React, { useMemo } from 'react'

import * as yup from 'yup'

import { SvcFormProvider } from '../../../components/form/Form'

import { SvcPagePlayersCreateContent } from './PlayersCreateContent'

const SvcPagePlayersCreate = () => {
  const validationSchema = useMemo(
    () =>
      yup.object().shape({
        name: yup.string().required('Preencha o nome.')
      }),
    []
  )

  return (
    <SvcFormProvider validationSchema={validationSchema}>
      <SvcPagePlayersCreateContent />
    </SvcFormProvider>
  )
}

export default SvcPagePlayersCreate
