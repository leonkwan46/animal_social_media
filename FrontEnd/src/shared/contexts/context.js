import React, { createContext } from 'react';
import socketio from 'socket.io-client'


export const socket = socketio.connect('http://localhost:5000');
export const SocketContext = React.createContext(socket);

// import { io, Socket } from 'socket.io-client';

// const socket = io('http://localhost:3000'),
//   SocketContext = createContext<Socket>(socket);

// socket.on('connect', () => console.log('connected to socket'));

// const SocketProvider = ({ children }: any) => {
//   return (
//     <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
//   );
// };
// export { SocketContext, SocketProvider };