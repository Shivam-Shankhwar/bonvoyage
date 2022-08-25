import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import Header from './Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Sign from './components/Sign';
import BookTour from './components/BookTour';
import Footer from './components/Footer';
import Pricing from './components/Pricing';
import Allactivities from './components/Allactivities';
import { useState } from 'react';
import Faq from './components/Faq';

function App() {
  const [cartData, setCartData] = useState(0);
  const handleCartData = data => {
    setCartData(data);
  };

  return (
    <div className="App">
      <Router>
        <Header addToCart={cartData} />
        <main>
          <section>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/sign" element={<Sign />} />
              <Route path="/allactivities" element={<Allactivities />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/faq/*" element={<Faq />} />
              <Route
                path="/booktour"
                element={<BookTour onSendData={handleCartData} />}
              />
            </Routes>
          </section>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
