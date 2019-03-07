import { Project } from './../../entity/Project';
import { User } from './../../entity/User';
import { CreateTaskInput } from './CreateTaskInput';
import { MyContext } from './../../types/MyContext';
import { Task } from './../../entity/Task';
import { Resolver, Mutation, Ctx, Arg } from "type-graphql";

@Resolver()
export class TaskResolver {

  @Mutation(returns => Task, { nullable: true })
  async createTask(
    @Arg("data") { id, text }: CreateTaskInput,
    @Ctx() { req }: MyContext
  ) {
    const user = await User.findOne({ id: req.session!.userId });
    if (!user) throw new Error("User does not exist");

    const project = await Project.findOne({id});
    if (!project) throw new Error("Project does not exist");

    const { members } = project;
    if (members.some(usr => usr.id === user.id)) {
      const task = new Task();
      task.text = text;
      task.author = user;
      task.project = project;
      await task.save();
      return task;
    }

    return null;
  }

  @Mutation(returns => Boolean)
  async deleteTask(
    @Arg("id") id: string,
    @Ctx() { req }: MyContext
  ) {
    const user = await User.findOne({ id: req.session!.userId });
    if (!user) throw new Error("User does not exist");

    const task = await Task.findOne({id}, { relations: ["project"] });
    if (!task) throw new Error("Task does not exist");

    const { project } = task;
    const { members, author } = project;

    if (author.id === user.id || members.some(usr => usr.id === user.id)) {
      await task.remove();
      return true;
    }

    return false;
  }
}