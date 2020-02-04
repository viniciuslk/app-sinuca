import { Request, Response } from 'express'

import { CrudBaseController } from '../../common/crud'
import { HttpError } from '../../common/error'
import { Championship } from '../championship'

import { Team } from './entities'

class TeamController extends CrudBaseController<Team> {
  constructor() {
    super(Team)
  }

  create = async (req: Request, res: Response, next) => {
    try {
      if (req.body.championship) {
        const championship = await Championship.findOne(
          req.body.championship.id,
          {
            relations: ['teams']
          }
        )

        if (championship.maxTeams <= championship.teams.length) {
          return next(new HttpError(422, 'This championship is full.'))
        }
      }

      const data = await Team.save(req.body)
      return (res.json(data) as unknown) as Championship
    } catch (error) {
      return next(new HttpError(500, `${error.name}: ${error.message}`))
    }
  }

  update = async ({ body }: Request, res: Response, next): Promise<Team> => {
    if (!body.id) {
      return next(
        new HttpError(
          422,
          `${this._entity.name}'s ID is missing! Please, check your payload.`
        )
      )
    }

    if (body.championship) {
      const championship = await Championship.findOne(body.championship.id, {
        relations: ['teams']
      })

      if (championship.maxTeams <= championship.teams.length) {
        return next(new HttpError(422, 'This championship is full.'))
      }
    }

    try {
      const data = await this._entity.save(body)
      return (res.json(data) as unknown) as Team
    } catch (error) {
      return next(new HttpError(500, `${error.name}: ${error.message}`))
    }
  }
}

export default new TeamController()
