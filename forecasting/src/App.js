import './App.css';
import Search from './components/search/Search.tsx';
import Temperature from './components/temperature/Temperature.tsx';
import Forecast from './components/forecast/Forecast.tsx';

function App() {
  return (
    <>
      <h1 className='headerTitle'>Hello World</h1>
      <Search/>
      <Temperature/>
      <Forecast/>
    </>

  );
}

export default App;
