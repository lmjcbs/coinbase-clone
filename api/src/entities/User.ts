import { ObjectType, Field } from 'type-graphql';
import {
  BaseEntity,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';

import { Account, Currency, Transaction } from '.';

@ObjectType()
@Entity()
class User extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column('varchar')
  firstName: string;

  @Field()
  @Column('varchar')
  lastName: string;

  @Field()
  @Column('varchar')
  email: string;

  @Column('varchar')
  password: string;

  @Field()
  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @Field()
  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @Field()
  @OneToMany(() => Account, (account) => account.user)
  accounts: Account[];

  @Field()
  @OneToMany(() => Currency, (currency) => currency.user)
  currencies: Currency[];

  @Field()
  @OneToMany(() => Transaction, (transaction) => transaction.user)
  transactions: Transaction[];
}

export default User;
