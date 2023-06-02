
import './App.css';
import Navbar from './Components/Navbar';
import Books from './Components/Books';
import Cart from './Components/Cart';
import Home from './Components/Home';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Contact from './Components/Contact';
import Details from './Components/Details';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/books' element={<Books/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route exact path='/detailes' element={<Details/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
