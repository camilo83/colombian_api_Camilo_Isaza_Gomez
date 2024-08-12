import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import attractionsReducer from '../redux/AttractionsSlice';
import presidentsReducer from '../redux/PresidentsSlice';
import airportsReducer from '../redux/AirportsSlice';
export const store = configureStore({
  reducer: {
    attractionsState: attractionsReducer,
    presidentsState: presidentsReducer,
    airportsState: airportsReducer,
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
