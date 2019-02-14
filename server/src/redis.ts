import redis from 'redis';
import { promisify } from 'util';


export const redisOpts = {
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
  url: process.env.REDIS_URL
}

export const client = redis.createClient({
  ...redisOpts,
  password: process.env.REDIS_PASSWORD
} as any);


export const getAsync = promisify(client.get).bind(client);