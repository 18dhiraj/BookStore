
import './App.css';
import Navbar from './Components/Navbar';
import Section from './Components/Section';
import Book from './Components/Book';
import Home from './Components/Home';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Contact from './Components/Contact';
import Full from './Components/Full';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/books' element={<Section/>}/>
      <Route path='/cart' element={<Book/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route exact path='/detailes' element={<Full/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
