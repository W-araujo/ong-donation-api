import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('type')
export default class Type {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @CreateDateColumn({ name: 'Created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'Updated_at' })
  updatedAt: Date;
}
