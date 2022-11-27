import { FC } from "react";
import classNames from "classnames";
import SvgIcon from "../SvgIcon";
import "./StopwatchForm.sass";
import useStopwatchForm from "./useStopwatchForm";

interface IStopwatchFormProps {
  className?: string;
  placeholder?: string;
}

const StopwatchForm: FC<IStopwatchFormProps> = ({ className, placeholder }) => {
  const { title, handleChange, handleSubmit } = useStopwatchForm();

  return (
    <form
      onSubmit={handleSubmit}
      className={classNames("stopwatch-form", className)}
    >
      <input
        className="stopwatch-form__input"
        placeholder={placeholder}
        type="text"
        name="title"
        value={title}
        onChange={handleChange}
      />
      <label className="stopwatch-form__submit-wrap">
        <input className="stopwatch-form__submit-btn" type="submit" />
        <SvgIcon className="stopwatch-form__submit-icon" id="play-filled" />
      </label>
    </form>
  );
};

export default StopwatchForm;
