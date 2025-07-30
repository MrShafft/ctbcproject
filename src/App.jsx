
import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Productions from '@/components/Productions';
import Team from '@/components/Team';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <>
      <Helmet>
        <title>CTBC Studios - Professional Music & Video Production</title>
        <meta name="description" content="CTBC Studios offers professional music and video production services. Discover our portfolio, meet our talented team, and get in touch for your next project." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
        <Header />
        <Hero />
        <About />
        <Productions />
        <Team />
        <Services />
        <Contact />
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;
