import express, { NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import path from 'path';
import { nanoid } from 'nanoid';

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
// req값을 가져올때 사용하는 미들웨어
app.use(express.json());

app.get('/api/todos', (req, res) => {
  return res.json({ isSuccess: true, todos });
});

interface ICreateTodoRequest extends Request {
  body: {
    content: string;
  };
}

app.post('/api/todos', (req: ICreateTodoRequest, res) => {
  const { content } = req.body;

  if (content === undefined || typeof content !== 'string' || !content.trim()) {
    return res.json({ isSuccess: false });
  }

  const todo: ITodo = { id: nanoid(), content, isComplete: false };
  todos.push(todo);

  return res.json({ isSuccess: true, todo });
});

interface IUpdateTodoRequest extends Request {
  params: {
    id: string;
  };
  body: {
    isComplete: boolean;
    content: string;
  };
}

// params는 미들웨어가 필요없음
app.put('/api/todos/:id', (req: IUpdateTodoRequest, res) => {
  const { id } = req.params;

  if (Object.keys(req.body).length === 0) {
    return res.json({ isSuccess: false });
  }

  const { isComplete, content } = req.body;

  if (
    content !== undefined &&
    (typeof content !== 'string' || !content.trim())
  ) {
    return res.json({ isSuccess: false });
  }

  if (isComplete !== undefined && typeof isComplete !== 'boolean') {
    return res.json({ isSuccess: false });
  }

  const index = todos.findIndex((todo) => todo.id === id);
  if (index === -1) {
    return res.json({ isSuccess: false });
  }

  todos[index].isComplete = isComplete ?? todos[index].isComplete;
  todos[index].content = content ?? todos[index].content;

  return res.json({ isSuccess: true });
});

interface IDeleteTodoRequest extends Request {
  query: {
    ids: string;
  };
}

app.delete('/api/todos', (req: IDeleteTodoRequest, res) => {
  const ids = req.query.ids?.split(',');

  if (ids) {
    const indexes = todos.reduce((result: number[], todo, index) => {
      if (ids.includes(todo.id)) {
        return [index, ...result];
      }

      return result;
    }, []);

    if (ids.length !== indexes.length) {
      return res.json({ isSuccess: false });
    }

    indexes.forEach((index) => {
      todos.splice(index, 1);
    });
  } else {
    todos.length = 0;
  }

  return res.json({ isSuccess: true });
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
