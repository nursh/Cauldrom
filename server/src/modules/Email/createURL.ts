import uuid from 'uuid';
import ms from 'ms';
import { client } from '../../redis';

export const confirmationPrefix = 'confirmation: ';
export const forgotPasswordPrefix = 'forgot-password: ';

export const createURL = async (userId, mailPrefix?: string) => {
  const token = uuid();
  const prefix = mailPrefix === 'confirm' ? confirmationPrefix : forgotPasswordPrefix;
  client.set(`${prefix} ${token}`, userId, 'EX', ms('1 day'));

  if (!mailPrefix) return `http://localhost:8080/resetPassword/${token}`;
  return `http://localhost:8080/signin/${token}`;
}