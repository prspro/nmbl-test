import Stopwatch from './components/Stopwatch'
import StopwatchForm from './components/StopwatchForm'

const App = () => {
  return (
    <div className="container">
      <StopwatchForm placeholder="Enter tracker name" />
      <Stopwatch title="test" value={2222} isPaused={true} />
    </div>
  )
}

export default App
