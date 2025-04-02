import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import HistoricalBridges from './pages/HistoricalBridges';
import RecordBreakingBridges from './pages/RecordBreakingBridges';
import IconicBridges from './pages/IconicBridges';
import ModernBridges from './pages/ModernBridges';
import Gallery from './pages/Gallery';
import Feedback from './pages/Feedback';
import About from './pages/About';
import Contact from './pages/Contact';
export function App() {
  return <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/historical" element={<HistoricalBridges />} />
          <Route path="/record-breaking" element={<RecordBreakingBridges />} />
          <Route path="/iconic" element={<IconicBridges />} />
          <Route path="/modern" element={<ModernBridges />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>;
}