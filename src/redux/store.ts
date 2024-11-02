import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './features/auth/authSlice';
import FilterReducer from './features/filter/FilterSlice';
import { baseApi } from './features/api/baseApi';
export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        auth: AuthReducer,
        filter: FilterReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
