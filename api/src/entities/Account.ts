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

import { User, Currency } from '.';

@ObjectType()
@Entity()
class Account extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column('text')
  name: string;

  @Field()
  @Column('text')
  fiatCurrency: string;

  @Field()
  @Column({ nullable: false, type: 'float', default: 0.0 })
  balance: number;

  @Field()
  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @Field()
  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.accounts)
  user: User;

  @Field()
  @Column('integer')
  userId: number;

  @Field()
  @OneToMany(() => Currency, (currency) => currency.account)
  currencies: Currency[];
}

export default Account;
