import React from 'react';
import Hero from './components/Hero';
import Capabilities from './components/Capabilities';
import Work from './components/Work';
import ContactCTA from './components/ContactCTA';

function App() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Hero />
      <Capabilities />
      <Work />
      <ContactCTA />
      <footer className="bg-black py-8 text-center text-xs text-white/50">
        © {new Date().getFullYear()} ORA Works. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
