import { CreateNotificationInput } from './createNotificationInput';
import { MyContext } from './../../types/MyContext';
import { Notification } from './../../entity/Notification';
import { Resolver, Mutation, Arg, Ctx } from "type-graphql";
import { Project } from './../../entity/Project';
import { User } from './../../entity/User';


@Resolver()
export class NotificationResolver {

  @Mutation(returns => Notification)
  async createNotification(
    @Arg("data") { id, message }: CreateNotificationInput,
    @Ctx() { req }: MyContext
  ) {
    const user = await User.findOne({ id: req.session!.userId });
    if (!user) throw new Error("User does not exist");

    const project = await Project.findOne({id});
    if (!project) throw new Error("Project does not exist");

    const { members } = project;
    if (members.some(usr => usr.id === user.id)) {
      const notification = new Notification();
      notification.message = message;
      notification.project = project;
      await notification.save();
      return notification;
    }

    return null;
  }
}