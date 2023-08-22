import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from './components/navbar/Navbar';
import Home from './components/home/Home'
import Contact from './components/contact/Contact';
import About from './components/about/About';
import Visa from './components/visa/Visa';
// import CarouselComponent from './components/carousel/Carousel';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Services from './components/services/Services';


const App = () => {
  return (
    <>
    <BrowserRouter> 
    <Nav />
    <Routes>

      <Route>
          <Route exact path='/' element={<Home></Home>}></Route>
          <Route exact path='/home' element={<Home></Home>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/visa' element={<Visa></Visa>}></Route>
          <Route path='/services' element={<Services></Services>}></Route>
    </Route>
    </Routes>
    
    </BrowserRouter>

    <Footer/>
    </>
  );
}

export default App;