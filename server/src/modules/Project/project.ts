import { EditProjectInput } from './editProjectInput';
import { MyContext } from './../../types/MyContext';
import { CreateProjectInput } from './createProjectInput';
import { User } from '../../entity/User';
import { Project } from '../../entity/Project';
import { Resolver, Query, Arg, Mutation, Ctx } from "type-graphql";


@Resolver(Project)
export class ProjectResolver {

  @Query(returns => Project)
  async project(@Arg("id") id: string) {
    const project = await Project.findOne(id);
    if (!project) throw new Error("Project does not exist");
    return project;
  }

  @Query(returns => [Project])
  async projects() {
    const projects = await Project.find();
    return projects;
  }

  @Query(returns => [Project])
  async myProjects(@Ctx() { req }: MyContext) {
    const id = req.session!.userId;
    const projects = await Project.find({ author: id });
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
  async deleteProject(
    @Arg("id") id: string,
    @Ctx() { req }: MyContext
  ) {
    const user = await User.findOne({ id: req.session!.userId });
    if (!user) throw new Error("User does not exist");

    const project = await Project.findOne({ id });
    if (!project) return false;

    if (project.author.id !== user.id) {
      throw new Error("You're not authorized to delete other author's projects");
    }

    const removedProject = await Project.remove(project);
    if (removedProject === project) {
      return true;
    }
    return false;
  }

  @Mutation(returns => Project)
  async editProject(
    @Arg("data") data: EditProjectInput,
    @Ctx() { req }: MyContext
  ) {
    const { id, ...updateData } = data;
    const user = await User.findOne({ id: req.session!.userId });
    if (!user) throw new Error("User does not exist");

    const project = await Project.findOne({ id });
    if (!project) throw new Error("Project does not exist");

    if (project.author.id !== user.id) {
      throw new Error("You're not authorized to edit other author's projects");
    }

    await Project.update(id, { ...updateData });
    const editedProject = await Project.findOne({ id });
    return editedProject;
  }

  @Mutation(returns => Boolean)
  async joinProject(
    @Arg("id") id: string,
    @Ctx() { req }: MyContext
  ) {
    const user = await User.findOne({ id: req.session!.userId });
    if (!user) throw new Error("User does not exist");

    const project = await Project.findOne({ id });
    if (!project) throw new Error("Project does not exist");

    let { members } = project;


    if (!members.some(usr => usr.id === user.id)) {
      members = [...members, user];
      project.members = members;
      await project.save();
      return true;
    }

    return false;
  }

  @Mutation(type => Boolean)
  async leaveProject(
    @Arg("id") id: string,
    @Ctx() { req }: MyContext
  ) {
    const user = await User.findOne({ id: req.session!.userId });
    if (!user) throw new Error("User does not exist");

    const project = await Project.findOne({ id });
    if (!project) throw new Error("Project does not exist");

    let { members } = project;

    if (members.some(usr => usr.id === user.id)) {
      members = members.filter(usr => usr.id !== user.id);
      project.members = members;
      await project.save();
      return true;
    }

    return false;
  }
}