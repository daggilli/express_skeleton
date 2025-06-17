// index.js
import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const DEFAULT_PORT = '3000';
const port = process.env.PORT ?? DEFAULT_PORT;

app.get('/', (req: Request, res: Response) => {
  res.send('Express Skeleton index');
  console.log('Response sent');
});

app.listen(Number(port), () => {
  console.log(`Express skeleton listening on port ${port}`);
});
