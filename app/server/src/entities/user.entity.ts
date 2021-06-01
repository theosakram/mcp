import { Expense } from "./expense.entity";
import {
	Entity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	BaseEntity,
	OneToOne,
	OneToMany,
} from "typeorm";
import { Balance } from "./balance.entity";
import { Income } from "./income.entity";

@Entity()
export class User extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	fullName: string;

	@Column()
	email: string;

	@Column()
	password: string;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	@OneToOne(() => Balance, (balance) => balance.user)
	balance: Balance;

	@OneToMany(() => Income, (income) => income.user)
	incomes: Income[];

	@OneToMany(() => Expense, (expense) => expense.user)
	expenses: Expense[];
}
