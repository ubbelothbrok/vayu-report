import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Abstract from './content/Abstract';
import Introduction from './content/Introduction';
import Preliminaries from './content/Preliminaries';
import Architecture from './content/Architecture';
import Hardware from './content/Hardware';
import NavHAL from './content/NavHAL';
import VAIOS from './content/VAIOS';
import Vayu from './content/Vayu';
import Results from './content/Results';
import Conclusion from './content/Conclusion';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/abstract" />} />
          <Route path="/abstract" element={<Abstract />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/preliminaries" element={<Preliminaries />} />
          <Route path="/architecture" element={<Architecture />} />
          <Route path="/hardware" element={<Hardware />} />
          <Route path="/navhal" element={<NavHAL />} />
          <Route path="/vaios" element={<VAIOS />} />
          <Route path="/vayu" element={<Vayu />} />
          <Route path="/results" element={<Results />} />
          <Route path="/conclusion" element={<Conclusion />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
