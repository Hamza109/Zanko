import { io } from 'socket.io-client';

const SOCKET_URL = 'http://192.168.29.228:5000'; // Replace with your backend server IP and port
const socket = io(SOCKET_URL, {
  withCredentials: true,
});

export default socket;
