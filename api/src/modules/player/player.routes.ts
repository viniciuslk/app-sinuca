import { CrudRoutes } from "../../common/crud"

import PlayerController from "./player.controller"

export class PlayerRoutes extends CrudRoutes {
  constructor() {
    super(PlayerController)
  }
}
