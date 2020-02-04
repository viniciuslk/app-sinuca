import React, { Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

import PropTypes from 'prop-types'

import Drawer from '@material-ui/core/Drawer'

import { SvcLoading } from 'components/molecules/Loading'

import { useCrudIsOpen, useCrudBasePath, useCrudOnClose } from './CrudProvider'

export const CrudForm = ({ create: Create, edit: Edit }) => {
  const isOpen = useCrudIsOpen()
  const onClose = useCrudOnClose()
  const basePath = useCrudBasePath()

  return (
    <Drawer anchor="right" open={isOpen} onClose={() => onClose()}>
      <Suspense fallback={<SvcLoading />}>
        <Switch>
          <Route path={`${basePath}/novo`} exact component={Create} />
          <Route path={`${basePath}/:id`} component={Edit} />
        </Switch>
      </Suspense>
    </Drawer>
  )
}

CrudForm.propTypes = {
  create: PropTypes.any,
  edit: PropTypes.any
}
