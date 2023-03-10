import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact"


import PageNotFound from "./pages/PageNotFound";
import Gallery from './pages/Gallery';
import "./styles/styles.css"
import Menu from './pages/Menu';
// import "./data/isoto"
// import "./styles/1";




function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path='/gallery' element={<Gallery/>} />
        <Route path="*" element={<PageNotFound/>} />
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
