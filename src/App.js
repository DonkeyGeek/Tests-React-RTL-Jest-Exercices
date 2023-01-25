import { useState } from 'react';
import './App.css';
import { GetAllByRole } from './components/Queries/GetAllByRole';

function App() {

  const buttons = ["Bouton 1", "Bouton 2", "Bouton 3"];

  const [btns, setBtns] = useState(buttons);

  return (
    <div className="App">
      <GetAllByRole btns={btns} />
    </div>
  );
}

export default App;
