import express, { NextFunction, Request, Response } from 'express';
import { createServer } from 'http';
import morgan from 'morgan';
import path from 'path';
import { Server } from 'socket.io';

const app = express();

app.set('port', 3000);

app.use(morgan(process.env.NODE_ENV === 'product' ? 'combined' : 'dev'));
app.use(
  express.static(path.join(__dirname, 'public'), { extensions: ['html'] })
);

app.use((req, res) => {
  return res.status(404).send('Not Found');
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err);

  return res.status(500).send('Internal Server Error');
});

const server = createServer(app);

server.listen(app.get('port'), () => {
  console.log(`Server running at http://localhost:${app.get('port')}`);
});

interface IClientToServerEvents {}
interface IServerToClientEvents {}
interface IInterServerEvents {}
interface ISocketDate {}

const io = new Server<
  IClientToServerEvents,
  IServerToClientEvents,
  IInterServerEvents,
  ISocketDate
>(server);

io.on('connection', (socket) => {
  socket.onAny((event) => {
    console.log(`Socket event :${event}`);
  });
});
