import './App.css';
import Search from './components/search/Search.tsx';
import Temperature from './components/temperature/Temperature.tsx';
import Forecast from './components/forecast/Forecast.tsx';

function App() {
  return (
    <div className='app'>
      <header>
        <h1 className='headerTitle'>Tempo Lá Fora</h1>
        <Search />
      </header>

      <Temperature />
      <Forecast />
    </div>

  );
}

export default App;
