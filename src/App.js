import React, {useState} from 'react';
import './App.css';
import Nav from './components/Nav';
import ChangeName from './components/ChangeName';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import UserName from './components/UserName';


function App() {
  const [userName, setUserName] = useState('');

  const handleSubmit = input => {
    setUserName(input);
}

const router = createBrowserRouter([
  {
      path: "/",
      element: <ChangeName handleSubmit={handleSubmit} userName={userName} />
    

  },
  {
      path: '/:username',
      element: <UserName userName={userName} />

  }
]);


  return (
    <div className="App">
      <Nav userName={userName}/>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
