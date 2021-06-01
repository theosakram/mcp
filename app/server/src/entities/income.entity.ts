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
export class Income extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	source: string;

	@Column()
	amount: number;

	@CreateDateColumn()
	createdAt: Date;

	@ManyToOne(() => User, (user) => user.incomes)
	user: User;
}
