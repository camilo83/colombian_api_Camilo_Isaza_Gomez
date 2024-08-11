import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import themeReducer from '../redux/ThemeState';

export const store = configureStore({
  reducer: {
    projectsState: themeReducer,
  },
});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
