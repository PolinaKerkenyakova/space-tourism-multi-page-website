import { Routes, Route, Link } from "react-router-dom";

import './App.css';
import Crew from "./components/Crew/Crew";
import Destinations from "./components/Destinations/Destinations";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Technology from "./components/Technology/Technology";

function App() {
  return (
    <div className="site-wrapper">

      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/destinations' element={<Destinations />} />
          <Route path='/crew' element={<Crew />} />
          <Route path='/technology' element={<Technology />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
