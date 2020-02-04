import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm'

import { Match } from '../../match'
import { Team } from '../../team'

@Entity()
export class Championship extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('varchar')
  name: string

  @Column('text')
  description: string

  @Column('integer')
  pointsToWin: number

  @Column('integer', { default: 10 })
  maxTeams: number

  @Column('text')
  rules: string

  @OneToMany(
    () => Match,
    match => match.championship
  )
  matches: Match[]

  @OneToMany(
    () => Team,
    team => team.championship
  )
  teams: Team[]
}
