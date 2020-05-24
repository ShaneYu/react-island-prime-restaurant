import socketIo from 'socket.io';

const namespace = '/example';

export default (io: socketIo.Server) => {
  const exampleIO = io.of(namespace);

  let interval: NodeJS.Timeout;

  const emitDate = (socket: socketIo.Socket) =>
    socket.emit('UpdateDateEvent', new Date());

  exampleIO.on('connection', (socket) => {
    // eslint-disable-next-line no-console
    console.log(`New client connected to namespace: ${namespace}`);

    if (interval) {
      clearInterval(interval);
    }

    interval = setInterval(() => emitDate(socket), 1000);

    socket.on('disconnect', () => {
      // eslint-disable-next-line no-console
      console.log(`Client disconnected from namespace: ${namespace}`);
      clearInterval(interval);
    });
  });
};
