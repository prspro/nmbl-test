import { FC } from "react";
import classNames from "classnames";
import useStopwatch from "./useStopwatch";
import "./Stopwatch.sass";
import SvgIcon from "../SvgIcon";

interface IStopwatchProps {
  className?: string;
  id: number;
}

const Stopwatch: FC<IStopwatchProps> = ({ id, className }) => {
  const { computedValue, title, isPaused, handleRemove, handlePauseToggle } =
    useStopwatch({
      id,
    });

  return (
    <div className={classNames("stopwatch", className, { active: !isPaused })}>
      <p className="stopwatch__title">{title}</p>
      <span className="stopwatch__value">{computedValue}</span>
      {isPaused ? (
        <button onClick={handlePauseToggle} className="stopwatch__btn">
          <SvgIcon id="play" />
        </button>
      ) : (
        <button onClick={handlePauseToggle} className="stopwatch__btn">
          <SvgIcon id="pause" />
        </button>
      )}
      <button onClick={handleRemove} className="stopwatch__btn">
        <SvgIcon id="remove" />
      </button>
    </div>
  );
};

export default Stopwatch;
