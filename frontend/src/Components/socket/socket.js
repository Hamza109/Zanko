import { io } from 'socket.io-client';

const SOCKET_URL = 'http://93.127.167.88:5000'; // Replace with your backend server IP and port
const socket = io(SOCKET_URL, {
  withCredentials: true,
});

export default socket;
