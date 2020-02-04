import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

export const SvcLayoutToolbar = () => (
  <AppBar position="fixed">
    <Toolbar>
      <Typography variant="h6">SVC Sinuca</Typography>
    </Toolbar>
  </AppBar>
)
