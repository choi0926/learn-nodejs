import express, { NextFunction, Request, Response } from 'express';
import { createServer } from 'http';
import morgan from 'morgan';
import path from 'path';
import { Server } from 'socket.io';

const app = express();

app.set('port', 3000);

app.use(morgan(process.env.NODE_ENV === 'product' ? 'combined' : 'dev'));
app.use(express.static(path.join(__dirname, 'public'), { extensions: ['html'] }));

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

interface IClientToServerEvents {
  enterRoom: (nickname: string, roomName: string, callback: (totalUsers: number) => void) => void;
}
interface IServerToClientEvents {
  updateRooms: (rooms: string[]) => void;
  enterRoom: (nickname: string, totalUsers: number) => void;
  leaveRoom: (nickname: string, totalUsers: number) => void;
}
interface IInterServerEvents {}
interface ISocketDate {
  nickname: string;
}

const io = new Server<
  IClientToServerEvents,
  IServerToClientEvents,
  IInterServerEvents,
  ISocketDate
>(server);

io.on('connection', (socket) => {
  const getRooms = () => {
    const { rooms, sids } = io.sockets.adapter;

    const publicRoom: string[] = [];

    rooms.forEach((_, key) => {
      if (!sids.get(key)) {
        publicRoom.push(key);
      }
    });

    return publicRoom;
  };

  const getTotalUsers = (roomName: string) => {
    const totalUsers = io.sockets.adapter.rooms.get(roomName)?.size ?? 0;

    return totalUsers;
  };

  socket.onAny((event) => {
    console.log(`Socket event : ${event}`);
  });

  const rooms = getRooms();

  io.sockets.emit('updateRooms', rooms);

  socket.on('enterRoom', (nickname, roomName, callback) => {
    socket.data.nickname = nickname;

    socket.join(roomName);

    const totalUsers = getTotalUsers(roomName);

    socket.to(roomName).emit('enterRoom', nickname, totalUsers);

    const rooms = getRooms();

    io.sockets.emit('updateRooms', rooms);

    callback(totalUsers);
  });

  socket.on('disconnecting', () => {
    socket.rooms.forEach((roomName) => {
      if (socket.data.nickname) {
        const totalUsers = getTotalUsers(roomName);

        socket.to(roomName).emit('leaveRoom', socket.data.nickname, totalUsers);
      }
    });
  });
});
