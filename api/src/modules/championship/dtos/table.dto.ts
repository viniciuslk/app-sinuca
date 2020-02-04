import { Team } from '../../team'

export class ChampionshipTableItemDto extends Team {
  points: number
  matches: number
  victories: number
}

export class ChampionshipTableDto {
  table: ChampionshipTableItemDto[]
  winner: Team
}
