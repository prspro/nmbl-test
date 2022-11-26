import { FC } from "react";
import classNames from "classnames";
import useStopwatch from "./useStopwatch";
import "./Stopwatch.sass";
import SvgIcon from "../SvgIcon";

interface IStopwatchProps {
  className?: string;
  title: string;
  value: number;
  isPaused: boolean;
}

const Stopwatch: FC<IStopwatchProps> = ({
  className,
  title,
  value,
  isPaused,
}) => {
  const { computedValue } = useStopwatch({ value });

  return (
    <div className={classNames("stopwatch", className)}>
      <p className="stopwatch__title">
        {isPaused ? "paused" + title : "not paused" + title}
      </p>
      <span className="stopwatch__value">{computedValue}</span>
      {isPaused ? (
        <button className="stopwatch__btn">
          <SvgIcon id="pause" />
        </button>
      ) : (
        <button className="stopwatch__btn">
          <SvgIcon id="play" />
        </button>
      )}
      <button className="stopwatch__btn">
        <SvgIcon id="remove" />
      </button>
    </div>
  );
};

export default Stopwatch;
