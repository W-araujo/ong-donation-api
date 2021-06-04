import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  ManyToMany,
  JoinColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  JoinTable,
} from 'typeorm';

import Type from './Type';
import Donation from './Donation';

export enum UserRole {
  ADMIN = 'admin',
  ONG = 'ong',
}

@Entity('ong')
export default class Ong {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @ManyToOne(() => Type)
  @JoinColumn({ name: 'type_id' })
  typeId: number;

  @ManyToMany(() => Donation, { cascade: true })
  @JoinTable()
  donations: Donation[];

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.ONG })
  role: UserRole;

  @CreateDateColumn({ name: 'Created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'Updated_at' })
  updatedAt: Date;
}
