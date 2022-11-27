import React, { useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { addStopwatch } from "../../store/slice/appSlice";

// type IUseStopwatchFormProps = {};
type IUseStopwatchForm = {
  title: string;
  handleChange: (arg: React.FormEvent<HTMLInputElement>) => void;
  handleSubmit: (arg: React.FormEvent<HTMLFormElement>) => void;
};

const useStopwatchForm = (): IUseStopwatchForm => {
  const [title, setTitle] = useState<string>("");

  const dispatch = useAppDispatch();

  const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setTitle(e.currentTarget.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      addStopwatch({
        id: new Date().getTime(),
        value: new Date().getTime(),
        title:
          title === ""
            ? `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`
            : title,
        isPaused: false,
      })
    );
    setTitle("");
  };

  return {
    title,
    handleChange,
    handleSubmit,
  };
};

export default useStopwatchForm;
