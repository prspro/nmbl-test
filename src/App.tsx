import Stopwatch from "./components/Stopwatch";
import StopwatchForm from "./components/StopwatchForm";
import { useAppSelector } from "./store/hooks";

const App = () => {
  const stopwatchList = useAppSelector((state) => state.app.stopwatchList);

  return (
    <div className="container">
      <StopwatchForm placeholder="Enter tracker name" />
      {stopwatchList.map((entry) => (
        <Stopwatch
          key={entry.id}
          id={entry.id}
        />
      ))}
    </div>
  );
};

export default App;
