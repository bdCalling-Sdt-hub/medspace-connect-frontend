import { configureStore } from '@reduxjs/toolkit';
import FilterReducer from './features/filter/FilterSlice';
import ConversationReducer from './features/conversation/conversationSlice';
import MessageReducer from './features/message/messageSlice';
import notificationReducer from './features/notification/notificationSlice';
import { baseApi } from './features/api/baseApi';
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, persistStore, persistReducer } from 'redux-persist';
import authReducer from './features/auth/authSlice';
import storage from 'redux-persist/lib/storage';
const persistAuthConfig = {
      key: 'auth',
      storage,
};
const persistedAuthReducer = persistReducer(persistAuthConfig, authReducer);
export const store = configureStore({
      reducer: {
            [baseApi.reducerPath]: baseApi.reducer,
            auth: persistedAuthReducer,
            filter: FilterReducer,
            conversation: ConversationReducer,
            message: MessageReducer,
            notification: notificationReducer,
      },
      middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                  serializableCheck: {
                        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                  },
            }).concat(baseApi.middleware),
});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
