import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type PresidentsState = {
  presidentsTable: any[] | null;
};

const initialState: PresidentsState = {
  presidentsTable: null,
};

const presidentsSlice = createSlice({
  name: 'presidents',
  initialState,
  reducers: {
    setPresidentsTable: (state, action: PayloadAction<any[]>) => {
      state.presidentsTable = action.payload;
    },
  },
});

export default presidentsSlice.reducer;
export const { setPresidentsTable } = presidentsSlice.actions;
