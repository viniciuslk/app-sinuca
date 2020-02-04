import { Router } from "express"

export class CrudRoutes {
  public readonly _controller
  routes: Router

  constructor(controller) {
    this._controller = controller
    this.routes = Router()

    this.configureRoutes()
  }

  configureRoutes = () => {
    this.routes.get("/", this._controller.find)
    this.routes.get("/:id", this._controller.findOne)
    this.routes.delete("/:id", this._controller.delete)
    this.routes.post("/", this._controller.create)
    this.routes.put("/", this._controller.update)
  }
}
