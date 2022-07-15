import React, { useEffect } from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import AOS from 'aos';

function App(): React.ReactElement {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 1000,
      easing: 'ease-out-cubic',
    });
  });

  return (
    <Router>
      {/* <div>
        <NavBar />
      </div> */}
      <div id="modal-root" />
      <Routes>
        <Route path="/app/*" element={<Dashboard />} />
        <Route path="/" element={<Home />} />
        {/* Router does not match */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
