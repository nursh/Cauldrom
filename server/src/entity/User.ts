import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToMany } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';


import { Project } from './Project';
import { Task } from './Task';

@ObjectType()
@Entity()
export class User extends BaseEntity {

  @Field(type => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  username: string;

  @Field()
  @Column('text', { unique: true })
  email: string;

  @Column()
  password: string;

  @Column('bool', { default: false })
  confirmed: boolean;

  @Field(type => [Project], { nullable: true })
  @OneToMany(type => Project, project => project.author)
  projects: Project[];

  @Field(type => [Task], { nullable: true })
  @OneToMany(type => Task, task => task.author)
  tasks: Task[];

  static findProjects(id: string) {
    return this.createQueryBuilder('user')
      .where("user.id = :id", { id })
      .getMany();
  }
}