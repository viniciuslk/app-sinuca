import React, { lazy, Suspense, memo } from 'react'
import { useHistory } from 'react-router-dom'

import { ErrorBoundary } from 'components/molecules/ErrorBoundary'
import { SvcLoading } from 'components/molecules/Loading'
import { SvcCrud } from 'components/organisms/Crud'

const SvcPageTeamsList = lazy(() => import('./List'))
const SvcPageTeamsCreate = lazy(() => import('./Create'))
const SvcPageTeamsEdit = lazy(() => import('./Edit'))

const SvcPageTeams = memo(() => {
  const history = useHistory()

  return (
    <ErrorBoundary>
      <Suspense fallback={<SvcLoading />}>
        <SvcCrud
          basePath="/times"
          list={SvcPageTeamsList}
          create={SvcPageTeamsCreate}
          edit={SvcPageTeamsEdit}
        />
      </Suspense>
    </ErrorBoundary>
  )
})

SvcPageTeams.displayName = 'SvcPageTeams'

export default SvcPageTeams
