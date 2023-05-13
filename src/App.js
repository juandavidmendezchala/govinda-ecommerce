import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar></Navbar> 
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/buynow' element={<ItemListContainer greeting="Este es el mensaje"/>} />
        <Route exact path='/buynow/:productId' element={<ItemDetailContainer />} />
        <Route exact path='/buynow/category/:categoryId' element={<ItemListContainer />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
