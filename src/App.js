import { Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path='/' element={< Home />} />
        <Route exact path='/' element={< Products />} />
      </Routes>
    </div>
  );
}

export default App;
