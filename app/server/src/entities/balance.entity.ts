import {
	Entity,
	BaseEntity,
	PrimaryGeneratedColumn,
	Column,
	CreateDateColumn,
	UpdateDateColumn,
	OneToOne,
	JoinColumn,
} from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Balance extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	amount: number;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updatedAt: Date;

	@OneToOne(() => User, (user) => user.id)
	@JoinColumn()
	user: User;
}
