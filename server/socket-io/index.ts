import http from 'http';

import socketIo from 'socket.io';

import registerNamespaces from './namespaces';

export default (server: http.Server) => {
  const corsOrigins = process.env.SERVER_CORS_ORIGINS.toLowerCase().split(',');
  const io = socketIo(server);

  io.origins((origin, callback) => {
    if (
      corsOrigins.filter((allowedOrigin) => origin.indexOf(allowedOrigin) >= 0)
        .length === 0
    ) {
      callback('origin not allowed', false);
      return;
    }

    callback(null, true);
  });

  registerNamespaces(io);
};
