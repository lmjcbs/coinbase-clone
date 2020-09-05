import { ObjectType, Field } from 'type-graphql';
import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';

import { Currency, User } from '.';

@ObjectType()
@Entity()
class Transaction extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column('varchar')
  currencyPair: string;

  @Field()
  @Column('float')
  price: number;

  @Field()
  @Column('float')
  quantity: number;

  @Field()
  @Column('varchar')
  side: string;

  @Field()
  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @Field()
  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @Field()
  @ManyToOne(() => User, (user) => user.transactions)
  user: User;

  @Field()
  @Column('integer')
  userId: number;

  @Field()
  @ManyToOne(() => Currency, (currency) => currency.transactions)
  currency: Currency;

  @Field()
  @Column('integer')
  currencyId: number;
}

export default Transaction;
