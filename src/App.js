import { Route, Routes } from 'react-router-dom';
import Nav from "./components/nav/Nav";
import Leisure from './pages/Leisure/Leisure';
import Academic from './pages/Academic/Academic';
import Art from './pages/Art/Art';
import Design from './pages/Design/Design';
import Leadership from './pages/Leadership/Leadership';
import Programming from './pages/Programming/Programming';

import Home from "./pages/Home/Home";
import './App.css'
import { useEffect } from 'react';




function App() {
  

  return (
    <div className="App">
      <Nav/>
      <div className="App-div">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/design" element={<Design />} />
        <Route path="/academic" element={<Academic />} />
        <Route path="/art" element={<Art />} />
        <Route path="/leisure" element={<Leisure />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/programming" element={<Programming />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;


// <header className="App-header">
//         <h2 style={{textAlign:'center'}}>
//           Salamanovych Anna - personal web-site
//         </h2>
//         <img src={IELTSTestFormReport} alt="why" width='100%' />
//       </header>
