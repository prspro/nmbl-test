import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  removeStopwatch,
  toggleStopwatch,
  incrementStopwatchValue,
} from "../../store/slice/appSlice";
import useTicker from "../../useTicker";
const timeStep = 1000; ///stopwatch interwal in ms

type IUseStopwatchProps = {
  id: number;
};
type IUseStopwatch = {
  computedValue: string;
  title: string;
  isPaused: boolean;
  handleRemove: () => void;
  handlePauseToggle: () => void;
};

const useStopwatch = ({ id }: IUseStopwatchProps): IUseStopwatch => {
  const currentStopwatch = useAppSelector(
    (state) => state.app.stopwatchList
  ).find((entry) => entry.id === id);
  const stopwatchValue = currentStopwatch?.value || 0;
  const isPaused = currentStopwatch?.isPaused || false;
  const title = currentStopwatch?.title || "";

  const dispatch = useAppDispatch();

  const computeValue = () => {
    const hourCount = Math.floor(stopwatchValue / (1000 * 60 * 60));
    const minuteCount = Math.floor(
      (stopwatchValue - hourCount * (1000 * 60 * 60)) / (1000 * 60)
    );
    const secondCount = Math.floor(
      (stopwatchValue -
        hourCount * (1000 * 60 * 60) -
        minuteCount * (1000 * 60)) /
        1000
    );

    return `${hourCount.toString().length < 2 ? "0" + hourCount : hourCount}:${
      minuteCount.toString().length < 2 ? "0" + minuteCount : minuteCount
    }:${secondCount.toString().length < 2 ? "0" + secondCount : secondCount}`;
  };

  const computedValue = computeValue();

  const handlePauseToggle = () => {
    dispatch(toggleStopwatch(id));
  };

  const handleRemove = () => {
    dispatch(removeStopwatch(id));
  };

  // useEffect(() => {
  //   let i!: ReturnType<typeof setInterval>;

  //   if (!isPaused) {
  //     i = setInterval(() => {
  //       dispatch(incrementStopwatchValue({ id: id, value: timeStep }));
  //     }, timeStep);
  //   } else {
  //     clearInterval(i);
  //   }
  //   return () => {
  //     clearInterval(i);
  //   };
  // }, [isPaused]);

  const { ticker } = useTicker();

  useEffect(() => {
    ticker.postMessage(id);
    ticker.onmessage = (e) => {
      dispatch(incrementStopwatchValue({ id: id, value: timeStep }));
      // console.log("stopwatch "+id);
    };
  }, []);

  return { computedValue, title, isPaused, handleRemove, handlePauseToggle };
};

export default useStopwatch;
