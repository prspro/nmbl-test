import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IStopwatch {
  value: number;
  title: string;
  id: number;
  isPaused: boolean;
}

interface IState {
  stopwatchList: IStopwatch[];
}

const initialState:IState = {
  stopwatchList: [],
};

export const counterSlice = createSlice({
  name: "stopwatch",
  initialState,
  reducers: {
    addStopwatch: (state, action: PayloadAction<IStopwatch>) => {
      state.stopwatchList.push(action.payload);
    },
    removeStopwatch: (state, action: PayloadAction<number>) => {
      state.stopwatchList = state.stopwatchList.filter((entry) => {
        return entry.id !== action.payload;
      });
    },
    incrementStopwatchValue: (state, action: PayloadAction<number>) => {
      state.stopwatchList = state.stopwatchList.map((entry) =>
        entry.id !== action.payload ? entry : { ...entry, value: entry.value++ }
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
} = counterSlice.actions;
export default counterSlice.reducer;