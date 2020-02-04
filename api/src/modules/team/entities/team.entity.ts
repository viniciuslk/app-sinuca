import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from 'typeorm'

import { Championship } from '../../championship'
import { Match } from '../../match'
import { Player } from '../../player'

@Entity()
export class Team extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('varchar')
  name: string

  @OneToMany(
    () => Player,
    player => player.team
  )
  players: Player[]

  @ManyToOne(
    () => Championship,
    championship => championship.teams,
    { onDelete: 'SET NULL' }
  )
  championship: Championship

  @OneToMany(
    () => Match,
    match => match.winner
  )
  wins: Match[]

  @OneToMany(
    () => Match,
    match => match.looser
  )
  losses: Match[]
}
