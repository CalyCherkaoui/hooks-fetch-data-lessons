import './App.css';
import DataFechWithClickButton from './components/DataFechWithClickButton';
import DataFetching from './components/DataFetching';
import DataFetchWithInput from './components/DataFetchWithInput';

function App() {
  return (
    <div className="App">
      <DataFechWithClickButton />
      <DataFetchWithInput />
      <DataFetching />
    </div>
  );
}

export default App;
