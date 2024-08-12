import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type AirportsState = {
  airportsTable: any[] | null;
};

const initialState: AirportsState = {
  airportsTable: null,
};

const airportsSlice = createSlice({
  name: 'airports',
  initialState,
  reducers: {
    setAirportsTable: (state, action: PayloadAction<any[]>) => {
      state.airportsTable = action.payload;
    },
  },
});

export default airportsSlice.reducer;
export const { setAirportsTable } = airportsSlice.actions;
