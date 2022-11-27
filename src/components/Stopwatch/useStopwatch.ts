import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { removeStopwatch, toggleStopwatch } from "../../store/slice/appSlice";

type IUseStopwatchProps = {
  value: number;
  id: number;
};
type IUseStopwatch = {
  computedValue: string;
  handleRemove: () => void;
  handlePauseToggle: () => void;
};

const useStopwatch = ({ value, id }: IUseStopwatchProps): IUseStopwatch => {
  const computedValue = "computed " + value;

  const dispatch = useAppDispatch();

  const handlePauseToggle = () => {
    dispatch(toggleStopwatch(id))
  }

  const handleRemove = () => {
    dispatch(removeStopwatch(id))
  }

  return { computedValue, handleRemove, handlePauseToggle };
};

export default useStopwatch;
