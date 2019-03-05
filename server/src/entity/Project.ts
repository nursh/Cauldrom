import { ObjectType, Field, ID } from 'type-graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { User } from "./User";
import { Task } from './Task';
import { Notification } from './Notification';


@ObjectType()
@Entity() 
export class Project {

  @Field(type => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column() 
  name: string;

  @Field()
  @Column()
  description: string;

  @Field(type => User)
  @ManyToOne(type => User, author => author.projects)
  author: User;

  @Field(type => [User])
  @OneToMany(type => User, member => member.projects)
  members: User[];

  @Field(type => [Task])
  @OneToMany(type => Task, task => task.project)
  tasks: Task[];

  @Field(type => [Notification])
  @OneToMany(type => Notification, notification => notification.project)
  notifications: Notification[];
}