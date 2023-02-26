import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

// styles
import './App.css';

// components
import Header from './components/Header';
import Footer from './components/Footer';

// pages
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Portfolio from './pages/Portfolio';

function App() {

  return (
    <div className="App">
      <Router>
        <Header/>

        <Routes>
          <Route index element={ <Home/> }/>
          <Route path="/gallery" element={ <Gallery/> }/>
          <Route path="/portfolio" element={ <Portfolio/> }/>
          <Route path="*" element={() => <h2>404 Not Found </h2>} />
        </Routes>

        <Footer/>
      </Router>
    </div>
  )
}

export default App
