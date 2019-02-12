import "reflect-metadata";
import express, { Request, Response } from "express";
import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";
import passport from "passport";
import { createConnection } from "typeorm";

import { schema } from './schema';

export const app = express();

const main = async () => {
  const port = 4000;
  await createConnection();

  const server = new ApolloServer({
    schema: await schema(),
    context: ({ req, res }: any) => ({ req, res })
  });

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cors());

  app.use(passport.initialize());
  app.use(passport.session());

  app.get(
    "/",
    (req: Request, res: Response): void => {
      res.send("Happy Coding!!!");
    }
  );

  server.applyMiddleware({ app });
  app.listen(port, () => console.log(`App is running on port ${port}`));
};

main().catch(err => console.log(err));
