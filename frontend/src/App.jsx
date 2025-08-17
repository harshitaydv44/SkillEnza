import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';

import DiscoverSkills from './pages/DiscoverSkills';
import MySkills from './pages/MySkills';
import StreakTracker from './pages/StreakTracker';
import Portfolio from './pages/Portfolio';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          {/* Auth Routes (without navbar/footer) */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Main App Routes (with navbar/footer) */}
          <Route
            path="/*"
            element={
              <>
                <Navbar />
                <main className="flex-1">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/discover" element={<DiscoverSkills />} />
                    <Route path="/my-skills" element={<MySkills />} />
                    <Route path="/streak" element={<StreakTracker />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route
                      path="/profile"
                      element={<div className="p-8 text-center">Profile page coming soon!</div>}
                    />
                    <Route
                      path="/book-session"
                      element={<div className="p-8 text-center">Book session page coming soon!</div>}
                    />
                  </Routes>
                </main>
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
