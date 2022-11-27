import Stopwatch from "./components/Stopwatch";
import StopwatchForm from "./components/StopwatchForm";
import { useAppSelector } from "./store/hooks";

const App = () => {
  const stopwatchList = useAppSelector((state) => state.counter.stopwatchList);

  return (
    <div className="container">
      <StopwatchForm placeholder="Enter tracker name" />
      {stopwatchList.map((entry) => (
        <Stopwatch key={entry.id} id={entry.id} title={entry.title} value={entry.value} isPaused={entry.isPaused} />
      ))}
    </div>
  );
};

export default App;
