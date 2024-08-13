import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity({ name: 'request' })
export class RequestEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column({ default: false })
  allowed: boolean;

  @Column({ default: false })
  decided: boolean;

  @Column({ default: false })
  executed: boolean;
}
