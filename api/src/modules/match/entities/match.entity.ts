import {
  BaseEntity,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm'

import { Championship } from '../../championship'
import { Team } from '../../team'

@Entity()
export class Match extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @ManyToOne(
    () => Championship,
    championship => championship.matches,
    { onDelete: 'CASCADE' }
  )
  championship: Championship

  @ManyToOne(
    () => Team,
    team => team.wins,
    { onDelete: 'SET NULL' }
  )
  @JoinColumn({ name: 'winnerId' })
  winner: Team | string

  @ManyToOne(
    () => Team,
    team => team.losses,
    { onDelete: 'SET NULL' }
  )
  @JoinColumn({ name: 'looserId' })
  looser: Team | string
}
