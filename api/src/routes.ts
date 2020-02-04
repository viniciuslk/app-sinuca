import { Router } from 'express'

import { ChampionshipRoutes } from './modules/championship'
import { MatchRoutes } from './modules/match'
import { PlayerRoutes } from './modules/player'
import { TeamRoutes } from './modules/team'

const routes = Router()

routes.use('/players', new PlayerRoutes().routes)
routes.use('/teams', new TeamRoutes().routes)
routes.use('/matches', new MatchRoutes().routes)
routes.use('/championships', new ChampionshipRoutes().routes)

export default routes
