// index.js
import express from 'express';
const app = express();
const DEFAULT_PORT = '3000';
const port = process.env.PORT ?? DEFAULT_PORT;

app.get('/', (req, res) => {
  res.send('Express Skeleton index');
  console.log('Response sent');
});

app.listen(port, () => {
  console.log(`Express skeleton listening on port ${port}`);
});
