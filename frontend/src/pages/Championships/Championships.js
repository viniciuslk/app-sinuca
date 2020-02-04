import React, { lazy, Suspense, memo } from 'react'
import { useHistory, Route, Switch } from 'react-router-dom'

import { ErrorBoundary } from 'components/molecules/ErrorBoundary'
import { SvcLoading } from 'components/molecules/Loading'
import { SvcCrud } from 'components/organisms/Crud'

const SvcPageChampionshipsList = lazy(() => import('./List'))
const SvcPageChampionshipsCreate = lazy(() => import('./Create'))
const SvcPageChampionshipsEdit = lazy(() => import('./Edit'))
const SvcPageChampionshipsDetails = lazy(() => import('./Details'))

const SvcPageChampionships = memo(() => {
  const history = useHistory()

  return (
    <ErrorBoundary>
      <Suspense fallback={<SvcLoading />}>
        <Switch>
          <Route
            path="/campeonatos/:id/detalhes"
            exact
            component={SvcPageChampionshipsDetails}
          />

          <SvcCrud
            basePath="/campeonatos"
            list={SvcPageChampionshipsList}
            create={SvcPageChampionshipsCreate}
            edit={SvcPageChampionshipsEdit}
          />
        </Switch>
      </Suspense>
    </ErrorBoundary>
  )
})

SvcPageChampionships.displayName = 'SvcPageChampionships'

export default SvcPageChampionships
