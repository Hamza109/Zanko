import { addMessage } from '../Slice/SocketSlice';
import socket from '../../Components/socket/socket';

const socketMiddleware = () => {
  return ({ dispatch }) => {
    // Listen for messages and dispatch actions
    socket.on('message', (message) => {
        console.log('new',message)
      dispatch(addMessage(message));
    });

    return (next) => (action) => {
      // Intercept actions and handle socket events if necessary
      if (action.type === 'socket/sendMessage') {
        socket.emit('message', action.payload);
      }
      return next(action);
    };
  };
};

export default socketMiddleware;
