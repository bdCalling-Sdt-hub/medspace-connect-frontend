import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './features/auth/authSlice';
import FilterReducer from './features/filter/FilterSlice';
export const store = configureStore({
    reducer: {
        auth: AuthReducer,
        filter: FilterReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
