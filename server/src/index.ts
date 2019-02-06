import express, { Request, Response } from 'express';


const app = express();
const port = process.env.PORT || 4000;


app.get('/', (req: Request, res: Response): void => {
  res.send('Happy Coding!!!');
})
app.listen(port, () => console.log(`App is running on port ${port}`))