import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IStopwatch {
  value: number;
  title: string;
  id: number;
  isPaused: boolean;
  lastTimeAnchorValue: number;
}

interface IState {
  stopwatchList: IStopwatch[];
}

const initialState: IState = {
  stopwatchList: [],
};

export const counterSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    addStopwatch: (state, action: PayloadAction<IStopwatch>) => {
      state.stopwatchList.unshift(action.payload);
    },
    removeStopwatch: (state, action: PayloadAction<number>) => {
      state.stopwatchList = state.stopwatchList.filter((entry) => {
        return entry.id !== action.payload;
      });
    },
    incrementStopwatchValue: (
      state,
      action: PayloadAction<{ id: number; value: number }>
    ) => {
      state.stopwatchList = state.stopwatchList.map((entry) =>
        entry.id !== action.payload.id
          ? entry
          : { ...entry, value: entry.value + action.payload.value }
      );
    },
    updateLastTimeAnchorValue: (
      state,
      action: PayloadAction<{ id: number; value: number }>
    ) => {
      state.stopwatchList = state.stopwatchList.map((entry) =>
        entry.id !== action.payload.id
          ? entry
          : { ...entry, lastTimeAnchorValue: action.payload.value }
      );
    },
    toggleStopwatch: (state, action: PayloadAction<number>) => {
      state.stopwatchList = state.stopwatchList.map((entry) =>
        entry.id === action.payload
          ? { ...entry, isPaused: !entry.isPaused }
          : entry
      );
    },
  },
});

export const {
  addStopwatch,
  removeStopwatch,
  incrementStopwatchValue,
  toggleStopwatch,
  updateLastTimeAnchorValue,
} = counterSlice.actions;
export default counterSlice.reducer;
