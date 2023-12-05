import { createSlice } from '@reduxjs/toolkit';

export interface UiInitialState {
  openAdd: boolean;
}

const initialState: UiInitialState = {
  openAdd: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setOpenAdd: (state, action) => {
      state.openAdd = action.payload;
    },
  },
});

export const { setOpenAdd } = uiSlice.actions;

const UiReducer = uiSlice.reducer;

export { UiReducer };
