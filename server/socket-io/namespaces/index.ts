import registerExampleNs from './example';

export default (io: SocketIO.Server) => {
  registerExampleNs(io);
};
