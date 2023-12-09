import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import SelectedField from '../../resources/enums/SelectedField';

export interface MessageState {
  title: string;
  message: string;
  selectedField: SelectedField;
  selectionStart: number;
  titleCount: number;
  messageCount: number;
}

const initialState: MessageState = {
  title: '',
  message: '',
  selectedField: SelectedField.None,
  selectionStart: 0,
  titleCount: 0,
  messageCount: 0,
};

export const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    setTitle: (state: MessageState, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setMessage: (state: MessageState, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
    setSelectedField: (
      state: MessageState,
      action: PayloadAction<SelectedField>
    ) => {
      state.selectedField = action.payload;
    },
    setSelectionStart: (state: MessageState, action: PayloadAction<number>) => {
      state.selectionStart = action.payload;
    },
    setTitleCount: (state: MessageState, action: PayloadAction<number>) => {
      state.titleCount = action.payload;
    },
    setMessageCount: (state: MessageState, action: PayloadAction<number>) => {
      state.messageCount = action.payload;
    },
  },
});

export const {
  setTitle,
  setMessage,
  setSelectedField,
  setSelectionStart,
  setTitleCount,
  setMessageCount,
} = messageSlice.actions;

const MessageReducer = messageSlice.reducer;

export { MessageReducer };
