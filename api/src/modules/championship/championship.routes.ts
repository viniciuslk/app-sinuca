import { Router } from 'express'

import { CrudRoutes } from '../../common/crud'

import ChampionshipController from './championship.controller'

export class ChampionshipRoutes extends CrudRoutes {
  routes: Router
  constructor() {
    super(ChampionshipController)

    this.configureRoutes()
  }

  configureRoutes = () => {
    this.routes.use('/:id/tables', ChampionshipController.generateTable)
  }
}
