import { ObjectType, Field, ID } from 'type-graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity } from "typeorm";


import { User } from "./User";
import { Project } from './Project';


@ObjectType()
@Entity()
export class Task extends BaseEntity {

  @Field(type => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  text: string;

  @Field(type => User)
  @ManyToOne(type => User, author => author.tasks, { eager: true })
  author: User;

  @Field(type => Project)
  @ManyToOne(type => Project, project => project.tasks)
  project: Project;

} 