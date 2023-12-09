import { configureStore } from '@reduxjs/toolkit';

import { UiReducer } from '../features/ui/uiSlice';
import { messageApiSlice } from '../features/api/message/messageApiSlice';
import { messageSlice } from '../features/message/messageSlice';

export const store = configureStore({
  reducer: {
    ui: UiReducer,
    draftMessage: messageSlice.reducer,
    [messageApiSlice.reducerPath]: messageApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable the serializable check
    }).concat(messageApiSlice.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
