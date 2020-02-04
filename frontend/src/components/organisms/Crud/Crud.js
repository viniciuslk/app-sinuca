import React, { Suspense, useCallback } from 'react'
import { Route, useHistory } from 'react-router-dom'

import PropTypes from 'prop-types'

import Fab from '@material-ui/core/Fab'
import Paper from '@material-ui/core/Paper'

import AddIcon from '@material-ui/icons/Add'

import { SvcBox } from 'components/atoms/Box'
import { SvcLoading } from 'components/molecules/Loading'

import { CrudForm } from './CrudForm'
import { CrudProvider } from './CrudProvider'

export const SvcCrud = ({ basePath, list: List, create, edit }) => {
  const history = useHistory()

  const Form = useCallback(() => <CrudForm create={create} edit={edit} />, [
    edit,
    create
  ])

  return (
    <Paper>
      <CrudProvider basePath={basePath}>
        <Suspense fallback={<SvcLoading />}>
          <Route path={basePath} component={List} />
          <Route path={basePath} component={Form} />
        </Suspense>

        <SvcBox position="fixed" right={20} bottom={20}>
          <Fab
            color="primary"
            aria-label="add"
            onClick={() => history.push(`${basePath}/novo`)}
          >
            <AddIcon />
          </Fab>
        </SvcBox>
      </CrudProvider>
    </Paper>
  )
}

SvcCrud.propTypes = {
  basePath: PropTypes.string,
  list: PropTypes.any,
  create: PropTypes.any,
  edit: PropTypes.any
}
