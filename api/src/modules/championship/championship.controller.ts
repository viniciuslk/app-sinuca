import { Request, Response } from 'express'
import * as R from 'ramda'

import { CrudBaseController } from '../../common/crud'
import { Team } from '../team'

import { ChampionshipTableDto } from './dtos'
import { Championship } from './entities'

class ChampionshipController extends CrudBaseController<Championship> {
  constructor() {
    super(Championship)
  }

  generateTable = async (
    req: Request,
    res: Response
  ): Promise<ChampionshipTableDto[]> => {
    const {
      params: { id }
    } = req

    const championship = await Championship.findOne(id)

    const teams = await Team.find({
      where: {
        championship: { id }
      },
      relations: ['wins'],
      loadRelationIds: true
    })

    let winner

    const table = teams.map(team => {
      if (team.wins.length * 3 > championship.pointsToWin) {
        winner = team
      }

      return {
        ...team,
        points: team.wins.length * 3,
        matches: team.losses.length + team.wins.length,
        victories: team.wins.length
      }
    })

    const sortByNameCaseInsensitive = R.sortWith([R.descend(R.prop('points'))])

    return (res.json({
      table: sortByNameCaseInsensitive(table),
      winner
    }) as unknown) as ChampionshipTableDto[]
  }
}

export default new ChampionshipController()
