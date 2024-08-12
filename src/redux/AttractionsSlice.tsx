import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type AttractionsState = {
  attractionsTable: any[] | null;
};

const initialState: AttractionsState = {
  attractionsTable: null,
};

const attractionsSlice = createSlice({
  name: 'attractions',
  initialState,
  reducers: {
    setAttractionsTable: (state, action: PayloadAction<any[]>) => {
      state.attractionsTable = action.payload;
    },
  },
});

export default attractionsSlice.reducer;
export const { setAttractionsTable } = attractionsSlice.actions;
