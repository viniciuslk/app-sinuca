import { CrudRoutes } from '../../common/crud'

import MatchController from './match.controller'

export class MatchRoutes extends CrudRoutes {
  constructor() {
    super(MatchController)
  }
}
