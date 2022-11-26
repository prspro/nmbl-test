import Stopwatch from './components/Stopwatch'

const App = () => {
  return (
    <div className="container">
      <Stopwatch title="test" value={2222} isPaused={true} />
    </div>
  )
}

export default App
