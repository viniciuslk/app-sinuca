import React, { lazy, Suspense, memo } from 'react'

import { ErrorBoundary } from 'components/molecules/ErrorBoundary'
import { SvcLoading } from 'components/molecules/Loading'
import { SvcCrud } from 'components/organisms/Crud'

const SvcPagePlayersList = lazy(() => import('./List'))
const SvcPagePlayersCreate = lazy(() => import('./Create'))
const SvcPagePlayersEdit = lazy(() => import('./Edit'))

const SvcPagePlayers = memo(() => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<SvcLoading />}>
        <SvcCrud
          basePath="/jogadores"
          list={SvcPagePlayersList}
          create={SvcPagePlayersCreate}
          edit={SvcPagePlayersEdit}
        />
      </Suspense>
    </ErrorBoundary>
  )
})

SvcPagePlayers.displayName = 'SvcPagePlayers'

export default SvcPagePlayers
