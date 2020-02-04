import React, { useMemo } from 'react'

import * as yup from 'yup'

import { SvcFormProvider } from 'components/form/Form'

import { SvcPageChampionshipsCreateContent } from './ChampionshipsCreateContent'

const SvcPageChampionshipsCreate = () => {
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
    <SvcFormProvider
      validationSchema={validationSchema}
      defaultValues={{ maxTeams: 10 }}
    >
      <SvcPageChampionshipsCreateContent />
    </SvcFormProvider>
  )
}

export default SvcPageChampionshipsCreate
