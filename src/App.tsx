import Stopwatch from "./components/Stopwatch";
import StopwatchForm from "./components/StopwatchForm";
import { useAppSelector } from "./store/hooks";

const App = () => {
  const stopwatchList = useAppSelector((state) => state.stopwatchList);

  return (
    <div className="app container">
      <h1 className="app__title">tracker</h1>
      <StopwatchForm placeholder="Enter tracker name" className="app__form" />
      <ul className="app__stopwatch-list">
        {stopwatchList.map((entry) => (
          <li key={entry.id} className="app__stopwatch-item">
            <Stopwatch id={entry.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
