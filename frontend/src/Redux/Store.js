// store.js



import { configureStore } from '@reduxjs/toolkit';
import headerReducer from './Slice/HeaderSlice';
import socketReducer from './Slice/SocketSlice';
import socketMiddleware from './Middleware/SocketMiddleware';
 const store = configureStore({
  reducer: {
    header:headerReducer,
    socket: socketReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(socketMiddleware()),
});

export default store;

