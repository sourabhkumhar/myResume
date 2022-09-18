import './App.css';
import Navbar from './components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <Router>
      <Navbar />

      <div className="topPadding container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
        </Routes>
      </div>

    </Router>
  );
}

export default App;
