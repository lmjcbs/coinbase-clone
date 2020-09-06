import { ObjectType, Field } from 'type-graphql';
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

@ObjectType()
@Entity()
class Currency extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column('varchar')
  name: string;

  @Field()
  @Column('float')
  balance: number;

  @Field()
  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @Field()
  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @ManyToOne(() => Account, (account) => account.currencies)
  account: Account;

  @Field()
  @Column('integer')
  accountId: number;

  @ManyToOne(() => User, (user) => user.currencies)
  user: User;

  @Field()
  @Column('integer')
  userId: number;

  @Field()
  @OneToMany(() => Transaction, (transaction) => transaction.currency)
  transactions: Transaction[];
}

export default Currency;
