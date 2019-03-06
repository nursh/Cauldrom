import { MyContext } from './../../types/MyContext';
import { CreateProjectInput } from './createProjectInput';
import { User } from '../../entity/User';
import { Project } from '../../entity/Project';
import { Resolver, Query, Arg, Mutation, Ctx } from "type-graphql";


@Resolver(Project)
export class ProjectResolver {

  @Query(returns => Project, { nullable: true })
  async project(@Arg("id") id: string) {
    const project = await Project.findOne(id);
    if (!project) throw new Error("Project does not exist");
    return project;
  }

  @Query(returns => [Project], { nullable: true })
  async projects() {
    const projects = await Project.find({ relations: ["user"]});
    return projects;
  }

  @Query(returns => [Project], { nullable: true })
  async myProjects(@Arg("id") id: string) {
    const projects = await User.findProjects(id);
    return projects;
  }

  @Mutation(returns => Project)
  async createProject(
    @Arg("data") { name, description }: CreateProjectInput,
    @Ctx() { req }: MyContext
  ) {
    const id = req.session!.userId;
    const user = await User.findOne({ id });

    if (!user) {
      throw new Error("Must be logged in to create project")
    }

    const project = new Project();
    project.name = name;
    project.description = description;
    if (user) {
      project.author = user;
    }

    await project.save();
    return project;
  }

  @Mutation(returns => Boolean)
  async deleteProject(@Arg("id") id: string) {
    const removedProject = await Project.delete(id);
    return removedProject;
  }
}