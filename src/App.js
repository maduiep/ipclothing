import { Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Product from './components/Product';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={< Home />} />
        <Route path='/productList' element={< ProductList />} />
        <Route path='/products/:id' element={< Product />} />
      </Routes>
    </div>
  );
}

export default App;
