
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Service from './Components/Service';
import Contact from './Components/Contact';
import Navbar from './Components/Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Footer from './Components/Footer';

const App = () => {
    return (
        <Router>
            <div className="d-flex flex-column min-vh-100"> {/* Apply flexbox layout */}
                <Navbar />
                <div className="flex-grow-1"> {/* Allow main content area to grow */}
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/about' element={<About />} />
                        <Route path='/service' element={<Service />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='*' element={<Navigate to='/' />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
