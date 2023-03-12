import React, {useState} from 'react';
import './App.css';
import Nav from './Nav';
import ChangeName from './ChangeName';

function App() {
  const [userName, setUserName] = useState('');

  const handleSubmit = input => {
    setUserName(input);
}
  return (
    <div className="App">
      <Nav userName={userName}/>
      <ChangeName handleSubmit={handleSubmit} userName={userName} />
    </div>
  );
}

export default App;
