import {
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

  @OneToOne(() => RequestEntity)
  @JoinColumn()
  requestId: number;
}
