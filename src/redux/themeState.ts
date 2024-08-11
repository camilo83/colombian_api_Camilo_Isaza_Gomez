import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type ThemeState = {
  theme: 'light' | 'dark';
};

const initialState: ThemeState = {
  theme: 'light',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: (
      state: ThemeState,
      { payload }: PayloadAction<'light' | 'dark'>
    ) => {
      state.theme = payload;
      return state;
    },
  },
});

export default themeSlice.reducer;
export const { changeTheme } = themeSlice.actions;
