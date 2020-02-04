import { CrudBaseController } from '../../common/crud'

import { Match } from './entities'

class MatchController extends CrudBaseController<Match> {
  constructor() {
    super(Match)
  }
}

export default new MatchController()
