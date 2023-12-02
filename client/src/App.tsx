import React from 'react'
import { Navbar } from './components';
import Header from './pages/Header';
import { Testimonial, Work, WorkTogether } from './pages';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen ">

      <Navbar />
      <Header />
      <Work />
      <Testimonial />
      <WorkTogether />
      <Footer />

    </div>
  )
}

export default App;