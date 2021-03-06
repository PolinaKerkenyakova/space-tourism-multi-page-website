import { Routes, Route } from 'react-router-dom';

import './App.css';
import Crew from './components/Crew/Crew';
import Destinations from './components/Destinations/Destinations';
import Home from './components/Home/Home';
import Technology from './components/Technology/Technology';

function App() {
  return (
    < main >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/destinations' element={<Destinations />} />
        <Route path='/crew' element={<Crew />} />
        <Route path='/technology' element={<Technology />} />
      </Routes>
    </main >
  );
}

export default App;
