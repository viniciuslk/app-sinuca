import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm'

import { Team } from '../../team'

@Entity()
export class Player extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('varchar')
  name: string

  @ManyToOne(
    () => Team,
    team => team.players,
    { nullable: true, onDelete: 'SET NULL' }
  )
  @JoinColumn({ name: 'teamId' })
  team: Team
}
