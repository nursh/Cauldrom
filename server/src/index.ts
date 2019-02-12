import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import bodyParser from "body-parser";
import passport from "passport";
import { createConnection } from "typeorm";


import { schema } from "./schema";

export const app = express();

const main = async () => {
  await createConnection();

  const server = new ApolloServer({
    schema: await schema()
  });

  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use(passport.initialize());
  app.use(passport.session());

  server.applyMiddleware({ app, path: '/api/graphql' });

  const port = 4000;
  app.listen(port, () => console.log(`App is running on port ${port}`));
};

main();
