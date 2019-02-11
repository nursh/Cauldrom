import "reflect-metadata";
import express, { Request, Response } from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import cors from 'cors';


const main = async () => {
  const app = express();
  const port = 4000;

  const schema = await buildSchema({
    resolvers: [__dirname + '/modules/**/*.ts']
  });

  const server = new ApolloServer({
    schema
  });

  app.use(cors({
    credentials: true
  }));


  app.get('/', (req: Request, res: Response): void => {
    res.send('Happy Coding!!!');
  });
  server.applyMiddleware({ app });
  app.listen(port, () => console.log(`App is running on port ${port}`));
}

main();
