import {
	Entity,
	BaseEntity,
	PrimaryGeneratedColumn,
	CreateDateColumn,
	Column,
	ManyToOne,
} from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Expense extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	title: string;

	@Column()
	amount: number;

	@CreateDateColumn()
	createdAt: Date;

	@ManyToOne(() => User, (user) => user.expenses)
	user: User;
}
