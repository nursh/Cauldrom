import { ObjectType, Field, ID } from 'type-graphql';
import { Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  BaseEntity,
  ManyToMany,
  JoinTable 
} from "typeorm";
import { User } from "./User";
import { Task } from './Task';
import { Notification } from './Notification';


@ObjectType()
@Entity() 
export class Project extends BaseEntity {

  @Field(type => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column({ unique: true }) 
  name: string;

  @Field()
  @Column()
  description: string;

  @Field(type => User)
  @ManyToOne(type => User, author => author.projects, { eager: true })
  author: User;

  @Field(type => [User])
  @ManyToMany(type => User, { eager: true })
  @JoinTable()
  members: User[];

  @Field(type => [Task])
  @OneToMany(type => Task, task => task.project, { eager: true, onDelete: 'CASCADE' })
  tasks: Task[];

  @Field(type => [Notification])
  @OneToMany(type => Notification, notification => notification.project, { eager: true, onDelete: 'CASCADE' })
  notifications: Notification[];
}