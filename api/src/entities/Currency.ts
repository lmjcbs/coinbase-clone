import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';

import { User, Account, Transaction } from '.';

@Entity()
class Currency extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  name: string;

  @Column('float')
  balance: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @ManyToOne(() => Account, (account) => account.currencies)
  account: Account;

  @Column('integer')
  accountId: number;

  @ManyToOne(() => User, (user) => user.currencies)
  user: User;

  @Column('integer')
  userId: number;

  @OneToMany(() => Transaction, (transaction) => transaction.currency)
  transactions: Transaction[];
}

export default Currency;
