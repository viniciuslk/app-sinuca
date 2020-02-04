import React, { memo, Suspense, useMemo } from 'react'

import PropTypes from 'prop-types'
import * as yup from 'yup'

import Drawer from '@material-ui/core/Drawer'

import { SvcFormProvider } from 'components/form/Form'
import { ErrorBoundary } from 'components/molecules/ErrorBoundary'
import { SvcFormHeader } from 'components/molecules/FormHeader'
import { SvcLoading } from 'components/molecules/Loading'

import { SvcChampionshipsDetailsMatchDrawerForm } from './ChampionshipsDetailsMatchDrawerForm'

export const SvcChampionshipsDetailsMatchDrawer = memo(props => {
  const validationSchema = useMemo(
    () =>
      yup.object().shape({
        winner: yup.object().required('É necessário ter um vencedor.'),
        looser: yup.object().required('É necessário ter um perdedor.')
      }),
    []
  )

  return (
    <Drawer anchor="right" {...props}>
      <SvcFormHeader
        action="create"
        entityName="partida"
        onClose={props.onClose}
      />
      <ErrorBoundary>
        <Suspense fallback={<SvcLoading />}>
          <SvcFormProvider validationSchema={validationSchema}>
            <SvcChampionshipsDetailsMatchDrawerForm onClose={props.onClose} />
          </SvcFormProvider>
        </Suspense>
      </ErrorBoundary>
    </Drawer>
  )
})

SvcChampionshipsDetailsMatchDrawer.displayName =
  'SvcChampionshipsDetailsMatchDrawer'

SvcChampionshipsDetailsMatchDrawer.propTypes = {
  onClose: PropTypes.func
}
