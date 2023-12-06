import { createSlice } from '@reduxjs/toolkit';

export interface UiInitialState {
  openAdd: boolean;
  isLoading: boolean;
}

const initialState: UiInitialState = {
  openAdd: false,
  isLoading: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setOpenAdd: (state, action) => {
      state.openAdd = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setOpenAdd, setIsLoading } = uiSlice.actions;

const UiReducer = uiSlice.reducer;

export { UiReducer };
