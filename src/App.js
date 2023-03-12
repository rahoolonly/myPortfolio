import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './component/Home/Home';
import Navbar from './component/Navbar/Navbar'
import Projects from './component/Projects/Projects';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer/Footer';


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path={'/'} element={<Home/>} />
      <Route exact path={'/projects'} element={<Projects/>} />
      <Route exact path={'/about'} element={<About/>} />
      <Route exact path={'/contact'} element={<Contact/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
