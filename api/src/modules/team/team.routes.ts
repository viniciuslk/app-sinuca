import { CrudRoutes } from "../../common/crud"

import TeamController from "./team.controller"

export class TeamRoutes extends CrudRoutes {
  constructor() {
    super(TeamController)
  }
}
