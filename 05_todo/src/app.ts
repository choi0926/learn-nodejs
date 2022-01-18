import express, { NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import path from 'path';

interface ITodo {
  id: string;
  content: string;
  isComplete: boolean;
}

const todos: ITodo[] = [];

const app = express();

app.set('port', 3000);

app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));

app.use(
  express.static(path.join(__dirname, 'public'), { extensions: ['html'] })
);

app.get('/api/todos', (req, res) => {
  return res.json({ isSuccess: true, todos });
});

app.use((req, res) => {
  return res.status(404).send('Not Found');
});

// eslint-disable-next-line no-unused-vars
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err);

  return res.status(500).send('Internal Server Error');
});

app.listen(app.get('port'), () => {
  console.log(`Server running at http://localhost:${app.get('port')}`);
});
