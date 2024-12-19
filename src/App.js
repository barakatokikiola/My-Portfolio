import React, { useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  useEffect(() => {
    AOS.init();


  }, []);

  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
