import { Request, Response } from 'express'

import { CrudBaseController } from '../../common/crud'
import { HttpError } from '../../common/error'
import { Team } from '../team'

import { Player } from './entities'

class PlayerController extends CrudBaseController<Player> {
  constructor() {
    super(Player)
  }

  update = async ({ body }: Request, res: Response, next): Promise<Player> => {
    if (!body.id) {
      return next(
        new HttpError(
          422,
          `${this._entity.name}'s ID is missing! Please, check your payload.`
        )
      )
    }

    if (body.team) {
      const team = await Team.findOne(body.team.id, {
        relations: ['players']
      })

      if (team.players.length >= 2) {
        return next(new HttpError(422, 'This team is full.'))
      }
    }

    try {
      const data = await this._entity.save(body)
      return (res.json(data) as unknown) as Player
    } catch (error) {
      return next(new HttpError(500, `${error.name}: ${error.message}`))
    }
  }

  create = async (req: Request, res: Response, next) => {
    try {
      if (req.body.team) {
        const team = await Team.findOne(req.body.team.id, {
          relations: ['players']
        })

        if (team.players.length >= 2) {
          return next(new HttpError(422, 'This team is full.'))
        }
      }

      const data = await Player.save(req.body)
      return (res.json(data) as unknown) as Player
    } catch (error) {
      return next(new HttpError(500, `${error.name}: ${error.message}`))
    }
  }
}

export default new PlayerController()
