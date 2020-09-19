import React from 'react';
import './App.css';
import './components/Autocomplete';
import Autocomplete from './components/Autocomplete';

function App() {
  const words = ['love', 'rat', 'ratata', 'cat', 'loyal', 'aha','lolo'];
  return (
    <div className="App">
      <Autocomplete input='lo' data={words}/>
    </div>
  );
}

export default App;
