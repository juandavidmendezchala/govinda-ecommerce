import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      <Navbar></Navbar> 
      <ItemListContainer greeting="Este es el mensaje"></ItemListContainer>     
    </div>
  );
}

export default App;
