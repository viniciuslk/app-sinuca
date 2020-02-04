import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

import { SvcLayout } from 'components/layout'
import { SvcLoading } from 'components/molecules/Loading'
import { SvcGlobalStyle } from 'styles'

const Players = lazy(() => import('./pages/Players'))
const Teams = lazy(() => import('./pages/Teams'))
const Championships = lazy(() => import('./pages/Championships'))

export const SvcApp = () => {
  return (
    <SvcLayout>
      <SvcGlobalStyle />
      <Suspense fallback={<SvcLoading />}>
        <Switch>
          <Route path="/jogadores" component={Players} />
          <Route path="/times" component={Teams} />
          <Route path="/campeonatos" component={Championships} />
        </Switch>
      </Suspense>
    </SvcLayout>
  )
}
