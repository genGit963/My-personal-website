
import './App.css';
import WhatAmI from './pages/whatAmI';
import WhoAmI from './pages/whoAmI';
import WhereAmI from './pages/whereAmi';
import WhyAmI from './pages/whyAmi';

import NavBar from './components/navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <NavBar />
      <Routes>
        <Route path="/" element={<WhatAmI />} />
        <Route path="/who" element={<WhoAmI />} />
        <Route path="/why" element={<WhyAmI />} />
        <Route path="/where" element={<WhereAmI />} />
      </Routes>

      {/* <div className='whole-body'>
        <WhatAmI />
        <WhoAmI />
        <WhyAmI />
        <WhereAmI />
      </div> */}


    </div>
  );
}

export default App;
