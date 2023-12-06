import { configureStore } from '@reduxjs/toolkit';
// import { apiSlice } from '../features/api/apiSlice';
import { UiReducer } from '../features/ui/uiSlice';
import { messageApiSlice } from '../features/api/message/messageApiSlice';

export const store = configureStore({
  reducer: {
    ui: UiReducer,
    // [apiSlice.reducerPath]: apiSlice.reducer,
    [messageApiSlice.reducerPath]: messageApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(messageApiSlice.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
