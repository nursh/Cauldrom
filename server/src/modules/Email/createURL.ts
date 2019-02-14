import uuid from 'uuid';
import ms from 'ms';
import { client } from '../../redis';

export const confirmationPrefix = 'confirmation: ';
const forgotPasswordPrefix = 'forgot-password: ';

export const createURL = async (userId, mailPrefix) => {
  const token = uuid();
  const prefix = mailPrefix === 'confirm' ? confirmationPrefix : forgotPasswordPrefix;
  client.set(`${prefix} ${token}`, userId, 'EX', ms('1 day'));

  return `http://localhost:8080/signin/${token}`;
}