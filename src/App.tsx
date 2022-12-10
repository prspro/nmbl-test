import Stopwatch from "./components/Stopwatch";
import StopwatchForm from "./components/StopwatchForm";
import { useAppSelector } from "./store/hooks";
import useTicker from "./hooks/useTicker";

const App = () => {
  const stopwatchList = useAppSelector((state) => state.app.stopwatchList);

  const {} = useTicker();

  return (
    <div className="container">
      {/* <button onClick={async () => {console.log(await ticker.counter)}}>
        inc
      </button> */}
      <StopwatchForm placeholder="Enter tracker name" />
      {stopwatchList.map((entry) => (
        <Stopwatch key={entry.id} id={entry.id} />
      ))}
    </div>
  );
};

export default App;
