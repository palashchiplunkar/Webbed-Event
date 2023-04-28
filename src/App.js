import logo from './logo.svg';
import './App.css';
import Home from './views/Home';
import Navbar from './views/Navbar';
import "./css/app.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GalleryComponent from './views/Gallery';
import Footer from './views/Footer';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return(
      <div className='container'>
 
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/gallery' element={<GalleryComponent/>}/>
      </Routes>
   
      </BrowserRouter>

      <Footer/>

      </div>
    )
}

export default App;
