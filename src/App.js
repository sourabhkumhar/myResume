import './App.css';
import Navbar from './components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import { lazy, Suspense } from 'react';
import Spinner from './UI/Spinner';

const Skills = lazy(() => import('./components/Skills/Skills'))
const Projects = lazy(() => import('./components/Projects/Projects'))

function App() {
  return (
    <Router>
      <Navbar />

      <div className="topPadding container">
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/skills" element={<Skills />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
          </Routes>
        </Suspense>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
