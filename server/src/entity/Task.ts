import { ObjectType, Field, ID } from 'type-graphql';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";


import { User } from "./User";
import { Project } from './Project';


@ObjectType()
@Entity()
export class Task {

  @Field(type => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  text: string;

  @Field(type => User)
  @ManyToOne(type => User, author => author.tasks)
  author: User;

  @Field(type => Project)
  @ManyToOne(type => Project, project => project.tasks)
  project: Project;

}