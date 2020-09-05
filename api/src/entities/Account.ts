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

@Entity()
class Account extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  name: string;

  @Column('text')
  fiatCurrency: string;

  @Column({ nullable: false, type: 'float', default: 0.0 })
  balance: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @ManyToOne(() => User, (user) => user.accounts)
  user: User;

  @Column('integer')
  userId: number;

  @OneToMany(() => Currency, (currency) => currency.account)
  currencies: Currency[];
}

export default Account;
