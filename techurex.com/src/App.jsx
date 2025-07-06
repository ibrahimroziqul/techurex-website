import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { AuthProvider } from '@/contexts/SupabaseAuthContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import Services from '@/pages/Services';
import About from '@/pages/About';
import Contact from '@/pages/Contact';

function App() {
  return (
    <AuthProvider>
      <LanguageProvider>
        <Router>
          <div className="min-h-screen bg-white">
            <Helmet>
              <title>Techurex - Global Technology Solutions</title>
              <meta name="description" content="Professional technology services including mobile solutions, cybersecurity, digital marketing, and business automation. Serving clients globally with cutting-edge technology." />
              <meta name="keywords" content="technology services, mobile solutions, cybersecurity, digital marketing, IMEI checking, iCloud unlock, eSIM, business automation" />
              <meta property="og:title" content="Techurex - Global Technology Solutions" />
              <meta property="og:description" content="Professional technology services including mobile solutions, cybersecurity, digital marketing, and business automation." />
              <meta property="og:type" content="website" />
              <link rel="canonical" href="https://techurex.com" />
            </Helmet>
            
            <Header />
            
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </main>
            
            <Footer />
            <Toaster />
          </div>
        </Router>
      </LanguageProvider>
    </AuthProvider>
  );
}

export default App;