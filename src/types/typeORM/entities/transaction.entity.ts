import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { RequestEntity } from './request.entity';

@Entity({ name: 'transaction' })
export class TransactionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  date: Date;

  @Column()
  requestId: number;

  @OneToOne(() => RequestEntity)
  @JoinColumn({ name: 'requestId' })
  request: RequestEntity;
}
