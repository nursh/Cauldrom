import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';


@ObjectType()
@Entity('User')
export class User extends BaseEntity {

  @Field(() => ID)
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
}