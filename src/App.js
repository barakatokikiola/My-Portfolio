import './App.css';
import Home from './components/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';



function App() {
  
    AOS.init();
 
  return (
    <div className="">
      <Home />
    </div>
  );
}

export default App;
