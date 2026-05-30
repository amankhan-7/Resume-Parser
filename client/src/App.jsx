import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Toaster } from 'react-hot-toast';
import Home from './components/Home';

function App() {
  return (
    <Router>
      {/* Toast system (global) */}
      <Toaster position="top-right" />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;