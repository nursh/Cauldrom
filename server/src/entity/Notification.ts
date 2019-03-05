import { ObjectType, Field, ID } from 'type-graphql';
import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from "typeorm";
import { Project } from './Project';

@ObjectType()
@Entity()
export class Notification {

  @Field(type => ID)
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Field()
  @Column()
  message: string

  @Field(type => Project)
  @ManyToOne(type => Project, project => project.notifications)
  project: Project
}