import express, { NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import path from 'path';

const app = express();

app.set('port', 3000);

app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));
app.use(express.static(path.join(__dirname, 'public')));
// * 디렉터리 경로를 사용할때는 path 사용

app.use((req, res) => {
  res.status(404).send('NOT FOUND');
});

// eslint-disable-next-line no-unused-vars
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err);

  res.status(500).send('Internal Server Erorr');
});

app.listen(app.get('port'), () => {
  console.log(`Server Running at http://localhost:${app.get('port')}`);
});
