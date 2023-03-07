import './App.css';
import Select from './components/userInteractions/Select';
import TypeClear from './components/userInteractions/TypeClear';

function App() {
  const options = ['Option 1', 'Option 2', 'Option 3'];

  return (
    <div className="App">
      <TypeClear />
      <Select options={options}/>
    </div>
  );
}

export default App;
