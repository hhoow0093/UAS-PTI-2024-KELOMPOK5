import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from 'react-transition-group';
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
import Inspirasi from "./page/Inspirasi";
import LoadingSpinner from './LoadingSpinner';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inspirasi />} />
        <Route path="/news" element={<News />} />
        <Route path="/trivia" element={<Trivia />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path = "/kunjungan" element = {<Kunjugan/>}/>
        <Route path = "/kunjungan2" element = {<Kunjungan2/>}/>
        <Route path = "/kunjungan3" element = {<Kunjungan3/>}/>
        <Route path = "/kunjungan4" element = {<Kunjungan4/>}/>
        <Route path = "/kunjungan5" element = {<Kunjungan5/>}/>
        <Route path="/aboutus2" element={<Aboutus2 />} />
        <Route path="/home" element={<Home/>} />
      </Routes>
      <LoadingSpinner />
    </Router>
  );
}

export default App;
