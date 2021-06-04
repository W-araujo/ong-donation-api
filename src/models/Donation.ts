import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('donation')
export default class Donation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  value: number;

  @CreateDateColumn({ name: 'Created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'Updated_at' })
  updatedAt: Date;
}
