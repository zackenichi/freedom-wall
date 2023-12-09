import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface UiState {
  openAdd: boolean;
  isLoading: boolean;
  openEmoji: boolean;
}

const initialState: UiState = {
  openAdd: false,
  isLoading: false,
  openEmoji: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setOpenAdd: (state: UiState, action: PayloadAction<boolean>) => {
      state.openAdd = action.payload;
    },
    setIsLoading: (state: UiState, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },

    setOpenEmoji: (state: UiState, action: PayloadAction<boolean>) => {
      state.openEmoji = action.payload;
    },
  },
});

export const { setOpenAdd, setIsLoading, setOpenEmoji } = uiSlice.actions;

const UiReducer = uiSlice.reducer;

export { UiReducer };
