// lib/socketService.js
import { io } from 'socket.io-client';

let socket;

export const connectSocket = (serverUrl) => {
      socket = io(serverUrl);

      socket.on('connect', () => {
            console.log('Connected to the socket server');
      });

      socket.on('disconnect', () => {
            console.log('Disconnected from the socket server');
      });

      return socket;
};

export const getSocket = () => socket;
