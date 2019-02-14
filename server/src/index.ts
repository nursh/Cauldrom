import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import bodyParser from "body-parser";
import { createConnection } from "typeorm";
import session from 'express-session';
import ms from 'ms';

const RedisStore = require('connect-redis')(session);


import { schema } from "./schema";
import { redisOpts } from './redis';
import { formatArgumentValidationError } from "type-graphql";


const main = async () => {
  await createConnection();
  const app = express();

  const server = new ApolloServer({
    schema: await schema(),
    formatError: formatArgumentValidationError,
    context: ({ req, res }: any) => ({ req, res })
  });

  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));



  app.use(session({
    store: new RedisStore({ ...redisOpts, pass: process.env.REDIS_PASSWORD }),
    secret: process.env.REDIS_SECRET,
    resave: false,
    name: 'userId',
    saveUninitialized: false,
    cookie: {
      maxAge: ms('7 days')
    }
  } as any ));
  server.applyMiddleware({ app, path: '/api/graphql' });

  const port = 4000;
  app.listen(port, () => console.log(`App is running on port ${port}`));
};

main();
