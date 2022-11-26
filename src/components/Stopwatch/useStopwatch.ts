import React from 'react'

type IUseStopwatchProps = {
    value: number
}
type IUseStopwatch = {
    computedValue: string;
}

const useStopwatch = ({value}: IUseStopwatchProps):IUseStopwatch => {


    const computedValue = "computed " + value;

  return {computedValue}
}

export default useStopwatch