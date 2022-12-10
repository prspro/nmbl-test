import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  removeStopwatch,
  toggleStopwatch,
  incrementStopwatchValue,
} from "../../store/slice/appSlice";
import useTicker from "../../hooks/useTicker";
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
  const { ticker } = useTicker();

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

  useEffect(() => {
    ticker.onmessage = (e) => {
      dispatch(incrementStopwatchValue({ id: id, value: timeStep }));
    };
    return () => {
      ticker.terminate();
    };
  }, []);

  useEffect(() => {
    ticker.postMessage("toggle");
  }, [isPaused]);

  return { computedValue, title, isPaused, handleRemove, handlePauseToggle };
};

export default useStopwatch;
