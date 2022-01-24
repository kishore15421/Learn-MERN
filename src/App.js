import './App.css';
import './layout/layout-style.scss'
import Footer from './layout/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from 'react';
import Preloader from './reusable/Pre';
import Home from './pages/Home';
import ScrollToTop from './reusable/ScrollToTop';
import Maps from './components/heatmap/Maps';

function App() {
  const [load, upadateLoad] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  return (
    <Router>
      <Preloader load={load} />
      <ScrollToTop />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/maps" exact element={<Maps />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
