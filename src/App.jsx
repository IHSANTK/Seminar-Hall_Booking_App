import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SeminarHall from './components/SeminarHall';

const App = () => {
  return (
    <div className="App">
      <ToastContainer />
      <SeminarHall />
    </div>
  );
};

export default App;