import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

// styles
import './styles/style.scss';

// components
import Header from './components/Header';
import Footer from './components/Footer';

// pages
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Portfolio from './pages/Portfolio';
import NotFound from './pages/NotFound';

function App() {

  return (
    <div className="App">
      <Router>
        <Header/>

        <Routes>
          <Route index element={ <Home/> }/>
          <Route path="/gallery" element={ <Gallery/> }/>
          <Route path="/portfolio" element={ <Portfolio/> }/>
          <Route path="*" element={ <NotFound/> } />
        </Routes>

        <Footer/>
      </Router>
    </div>
  )
}

export default App
