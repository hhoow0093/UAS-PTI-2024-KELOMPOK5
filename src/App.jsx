import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
import { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import Aboutus from './page/Aboutus';
import Home from './page/Home';
import News from './page/News';
import Trivia from "./page/Trivia";
import Kunjugan from "./page/Kunjugan";
import Kunjungan2 from "./page/Kunjungan2";
import Kunjungan3 from "./page/Kunjungan3";
import Kunjungan4 from "./page/Kunjungan4";
import Kunjungan5 from "./page/Kunjungan5";
import Aboutus2 from "./page/Aboutus2";

function LoadingSpinner() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1000); // Simulate a loading delay
  }, [location]);

  if (isLoading) {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 9999,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Spinner animation="border" variant="warning" />
      </div>
    );
  }

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <LoadingSpinner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />} />
        <Route path="/trivia" element={<Trivia />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path = "/kunjungan" element = {<Kunjugan/>}/>
        <Route path = "/kunjungan2" element = {<Kunjungan2/>}/>
        <Route path = "/kunjungan3" element = {<Kunjungan3/>}/>
        <Route path = "/kunjungan4" element = {<Kunjungan4/>}/>
        <Route path = "/kunjungan5" element = {<Kunjungan5/>}/>
        <Route path="/aboutus2" element={<Aboutus2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
